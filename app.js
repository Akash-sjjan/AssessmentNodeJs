require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");
const csvParser = require("csv-parser");
const fs = require("fs");

const app = express();
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

    // After connecting to MongoDB, import questions from CSV file
    fs.createReadStream("./questions.csv")
      .pipe(csvParser())
      .on("data", async (row) => {
        // Create a new question with the data from the CSV row
        const question = new Question({
          question: row["Qustions"],
          options: [
            row["Option 1"],
            row["Option 2"],
            row["Option 3"],
            row["Option 4"],
          ],
          correctAnswer: row["Correct Answer"],
        });

        // Save the question to MongoDB
        await question.save();
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
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
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
    phone: req.body.phone,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  user
    .save()
    .then(() => res.json({ message: "User signed up successfully" }))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.json({ message: "User logged in successfully", token: token });
  } else {
    res.json({ message: "Invalid credentials" });
  }
});

app.get("/questions", validateToken, async (req, res) => {
  // Get all questions from the database excluding the correctAnswer field
  const allQuestions = await Question.find().select("-correctAnswer");

  // Randomly shuffle the array of questions
  const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random());

  // Get the first 25 questions from the shuffled array
  const selectedQuestions = shuffledQuestions.slice(0, 25);

  // Return the selected questions
  res.json(selectedQuestions);
});

app.post("/answer", validateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
      const answers = req.body;
      let score = 0;
  
      for (let questionId in answers) {
        try {
          const question = await Question.findById(questionId);
          if (question && question.correctAnswer === answers[questionId].choosenAnswer) {
            score++;
          }
        } catch (error) {
          // This will catch any errors during question lookup.
          console.error(`Error finding question with id ${questionId}: ${error.message}`);
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
          res.status(200).json({
            success: true,
            message: "Email sent successfully!",
            score: score,
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
