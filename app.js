require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const csvParser = require("csv-parser");
const fs = require("fs");

// Required Environment Variables
const requiredEnv = ["MONGODB_URI", "SENDGRID_API_KEY", "JWT_SECRET", "PORT"];
requiredEnv.forEach((variable) => {
  if (!process.env[variable]) {
    console.error(`${variable} is not defined. Terminating...`);
    process.exit(1);
  }
});

const app = express();
app.use(cors());  // Use the cors middleware
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
  .then(() => {
    console.log("Connected to MongoDB");

    // Import questions from CSV file if file exists
    if (fs.existsSync("./questions.csv")) {
      fs.createReadStream("./questions.csv")
        .pipe(csvParser())
        .on("data", async (row) => {
          // Create a new question with the data from the CSV row
          const question = new Question({
            question: row["Questions"],
            options: [
              row["Option 1"],
              row["Option 2"],
              row["Option 3"],
              row["Option 4"],
            ],
            correctAnswer: row["Correct Answer"],
          });

          // Save the question to MongoDB
          try {
            await question.save();
          } catch (error) {
            console.error(`Error saving question: ${error}`);
          }
        })
        .on("end", () => {
          console.log("CSV file successfully processed");
        });
    } else {
      console.log("CSV file not found. No questions were imported.");
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
  const { email, password } = req.body;
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
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token Expiry set to 1 hour
    });
    res.json({ message: "User logged in successfully", token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/questions", validateToken, async (req, res) => {
  const allQuestions = await Question.find().select("-correctAnswer");

  if (!allQuestions.length) {
    return res.status(404).json({ error: "No questions found" });
  }

  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());
  const selectedQuestions = shuffledQuestions.slice(0, 25);

  res.json(selectedQuestions);
});

app.post("/answer", validateToken, async (req, res) => {
  if (typeof req.body !== "object" || req.body === null) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const user = await User.findById(req.user._id);
    const answers = req.body;
    let score = 0;

    for (let questionId in answers) {
      try {
        const question = await Question.findById(questionId);
        if (
          question &&
          question.correctAnswer === answers[questionId].choosenAnswer
        ) {
          score++;
        }
      } catch (error) {
        console.error(
          `Error finding question with id ${questionId}: ${error.message}`
        );
        return res.status(500).json({ error: "Error processing answers" });
      }
    }

    const email = {
      to: "akashsajjan4@gmail.com",
      from: "akash.sajjan@cognitiveclouds.com",
      subject: "Quiz Result",
      text: `${user.firstName} ${user.lastName} has scored ${score} marks`,
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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
