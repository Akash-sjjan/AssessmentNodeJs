require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const csvParser = require("csv-parser");
const fs = require("fs");
const file = require("./AssessQuestions.js");

// Required Environment Variables
const requiredEnv = ["MONGODB_URI", "SENDGRID_API_KEY", "JWT_SECRET", "PORT"];
requiredEnv.forEach((variable) => {
  if (!process.env[variable]) {
    console.error(`${variable} is not defined. Terminating...`);
    process.exit(1);
  }
});

const app = express();
app.use(cors()); // Use the cors middleware
const port = process.env.PORT || 3000;

// MongoDB models
const User = require("./models/User");
const Question = require("./models/Question");

// Setting SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Clear the Question collection before importing new data
    try {
      await Question.deleteMany({});
      console.log("Questions cleared from MongoDB");
    } catch (err) {
      console.error("Could not clear questions from MongoDB", err);
    }

    // Import questions from Assessment object
    try {
      for (const item of file.AssessQuestions) {
        const question = new Question({
          question: item.question,
          options: item.options,
          correctAnswer: item.correctAnswer,
          code: item.code,
          type: item.type,
        });

        console.log(question);
        await question.save();
      }

      console.log("Assessment questions successfully processed");
    } catch (error) {
      console.error(`Error saving question: ${error}`);
    }
  })
  .catch((err) => console.error("Could not connect to MongoDB", err));
// Middleware to validate JWT token
function validateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

app.post("/signup", async (req, res) => {
  const { email, password, phone, firstName, lastName } = req.body;

  // Validate request body
  if (!email || !password || !phone || !firstName || !lastName) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Check if user with given email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "User with given email already exists" });
  }

  // Hash password and create user
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
      phone,
      firstName,
      lastName,
    });

    await user.save();
    res.json({ message: "User signed up successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password, nickname } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (user.testCompleted) {
    return res
      .status(403)
      .json({ message: "You have already completed the test." });
  }

  if (await bcrypt.compare(password, user.password)) {
    // Update the user's nickname
    user.nickname = nickname;
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token Expiry set to 1 hour
    });
    res.json({ message: "User logged in successfully", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/questions", validateToken, async (req, res) => {
  const questionType = req.query.questionType;

  if (!questionType) {
    return res.status(400).json({ error: "QuestionType is required" });
  }

  let questionsToSend = [];

  const codeQuestions = await Question.find({
    type: questionType,
    code: { $ne: "" },
  }).select("-correctAnswer");
  questionsToSend = questionsToSend.concat(
    codeQuestions.sort(() => 0.5 - Math.random()).slice(0, 3)
  );

  if (questionType === "ReactNative" || questionType === "ReactJs") {
    const tsQuestions = await Question.find({ type: "TypeScript" }).select(
      "-correctAnswer"
    );
    questionsToSend = questionsToSend.concat(
      tsQuestions.sort(() => 0.5 - Math.random()).slice(0, 8)
    );
  }

  const remainingQuestions = await Question.find({
    type: questionType,
    code: "",
  }).select("-correctAnswer");
  questionsToSend = questionsToSend.concat(
    remainingQuestions.sort(() => 0.5 - Math.random()).slice(0, 14)
  );

  // Shuffle all the questions together
  questionsToSend = questionsToSend.sort(() => 0.5 - Math.random());

  res.json(questionsToSend);
});

app.post("/answer", validateToken, async (req, res) => {
  if (typeof req.body !== "object" || req.body === null) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const user = await User.findById(req.user._id);
    const answers = req.body;
    let score = 0;
    let answeredQuestions = [];

    // get IDs of answered questions
    const questionIds = Object.keys(answers);

    // fetch only answered questions from the database
    const allQuestions = await Question.find({ _id: { $in: questionIds } });

    for (let question of allQuestions) {
      let userAnswer = answers[question._id]
        ? answers[question._id].choosenAnswer
        : "No answer";
      let isCorrect = false;
      if (question.correctAnswer === userAnswer) {
        score++;
        isCorrect = true;
      }

      // add question, answer, and correctness to the array
      answeredQuestions.push({
        question: question.question,
        answer: userAnswer,
        isCorrect: isCorrect,
      });
    }

    const answersTable = answeredQuestionsToHtmlTable(answeredQuestions);

    const email = {
      to: "akashsajjan4@gmail.com",
      from: "akash.sajjan@cognitiveclouds.com",
      subject: "Quiz Result",
      html: `${user.firstName} ${user.lastName} has scored ${score} marks. Here are the responses given by ${user.firstName}: ${answersTable}`,
    };

    sgMail
      .send(email)
      .then(() => {
        if (res.statusCode === 200) {
          user.testCompleted = true;
          user.save().catch((error) => {
            console.error(`Error saving user: ${error}`);
            return res.status(500).json({ error: "Error updating user" });
          });
        }
        res.status(200).json({
          success: true,
          message: "Email sent successfully!",
          score,
          firstName: user.firstName,
          lastName: user.lastName,
        });
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
        res.status(500).json({
          success: false,
          message: "An error occurred while trying to send the email",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
    });
  }
});

function answeredQuestionsToHtmlTable(questions) {
  let table =
    '<table style="border: 1px solid black; border-collapse: collapse;">';
  table +=
    '<tr><th style="border: 1px solid black; padding: 5px;">Question</th><th style="border: 1px solid black; padding: 5px;">Answer</th><th style="border: 1px solid black; padding: 5px;">Correct</th></tr>';
  for (let item of questions) {
    table += "<tr>";
    table +=
      '<td style="border: 1px solid black; padding: 5px;">' +
      item.question +
      "</td>";
    table +=
      '<td style="border: 1px solid black; padding: 5px;">' +
      item.answer +
      "</td>";
    table +=
      '<td style="border: 1px solid black; padding: 5px;">' +
      (item.isCorrect ? "Correct" : "Incorrect") +
      "</td>";
    table += "</tr>";
  }
  table += "</table>";
  return table;
}

function generatePassword() {
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$#@!";
  for (let i = 0; i < 10; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

app.post("/createuser", async (req, res) => {
  try {
    const createdUsers = [];
    for (let i = 0; i < 20; i++) {
      const uniqueNumber = Math.floor(1000 + Math.random() * 9000);

      const email = `User${uniqueNumber}`;
      const password = generatePassword();
      const firstName = `User${uniqueNumber}`;

      const phone = "1234567890";
      const lastName = "CC";

      // Hash password and create user
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashedPassword,
        phone,
        firstName,
        lastName,
      });

      const savedUser = await user.save();
      const userObject = savedUser.toObject(); // Convert document to object
      delete userObject.password; // Remove hashed password

      userObject.password = password; // Add plain password

      createdUsers.push(userObject);
    }

    res.json({ message: "20 users created successfully", users: createdUsers });
  } catch (error) {
    res.status(500).json({ message: "Error creating users", error: error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
