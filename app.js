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
const AdminBro = require("admin-bro");
const AdminBroExpress = require("@admin-bro/express");
const AdminBroMongoose = require("@admin-bro/mongoose");
const session = require("express-session");

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

// Use AdminBro Mongoose adapter
AdminBro.registerAdapter(AdminBroMongoose);

// Create new AdminBro instance
const adminBro = new AdminBro({
  databases: [mongoose],
  resources: [User, Question],
  rootPath: "/admin",
});

const auth = {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email });
    if (user && (await user.comparePassword(password)) && user.admin) {
      return user;
    }
    return null;
  },
  cookiePassword: "some-secret-password-used-for-cookie-encryption",
  cookieName: "optional-cookie-name",
};

// Create router for AdminBro and add it to express routes
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, auth);
app.use(adminBro.options.rootPath, router);

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
      // await Question.deleteMany({});
      console.log("Questions cleared from MongoDB");
    } catch (err) {
      console.error("Could not clear questions from MongoDB", err);
    }

    // Import questions from Assessment object
    try {
      // for (const item of file.AssessQuestions) {
      //   const question = new Question({
      //     question: item.question,
      //     options: item.options,
      //     correctAnswer: item.correctAnswer,
      //     code: item.code,
      //     type: item.type,
      //   });

      //   console.log(question);
      //   await question.save();
      // }

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

// app.post("/signup", async (req, res) => {
//   const { email, password, phone, firstName, lastName } = req.body;

//   // Validate request body
//   if (!email || !password || !phone || !firstName || !lastName) {
//     return res.status(400).json({ error: "All fields are required" });
//   }

//   // Check if user with given email already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res
//       .status(400)
//       .json({ error: "User with given email already exists" });
//   }

//   // Hash password and create user
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({
//       email,
//       password: hashedPassword,
//       phone,
//       firstName,
//       lastName,
//     });

//     await user.save();
//     res.json({ message: "User signed up successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Error creating user" });
//   }
// });

app.post("/login", async (req, res) => {
  const { email, password, nickname, userEmail } = req.body;
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
    // Update the user's nickname and userEmail
    user.nickname = nickname;
    user.userEmail = userEmail;
    await user.save();

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h", // Token Expiry set to 1 hour
    });
    res.json({
      message: "User logged in successfully",
      token,
      admin: user.admin,
    });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

app.get("/questions", validateToken, async (req, res) => {
  const questionType = req.query.questionType;
  const user = await User.findById(req.user._id);

  if (!questionType) {
    return res.status(400).json({ error: "QuestionType is required" });
  }

  let questionsToSend = [];

  if (questionType === "ReactNative" || questionType === "ReactJs") {
    const codeQuestions = await Question.find({
      type: questionType,
      code: { $ne: "" },
    }).select("-correctAnswer");
    questionsToSend = questionsToSend.concat(
      codeQuestions.sort(() => 0.5 - Math.random()).slice(0, 3)
    );

    const tsQuestions = await Question.find({ type: "TypeScript" }).select(
      "-correctAnswer"
    );
    questionsToSend = questionsToSend.concat(
      tsQuestions.sort(() => 0.5 - Math.random()).slice(0, 5)
    );
    const jsQuestions = await Question.find({ type: "JavaScript" }).select(
      "-correctAnswer"
    );

    questionsToSend = questionsToSend.concat(
      jsQuestions.sort(() => 0.5 - Math.random()).slice(0, 5)
    );
    const remainingQuestions = await Question.find({
      type: questionType,
      code: "",
    }).select("-correctAnswer");
    questionsToSend = questionsToSend.concat(
      remainingQuestions.sort(() => 0.5 - Math.random()).slice(0, 12)
    );
  } else if (questionType === "Ruby") {
    const codeQuestions = await Question.find({
      type: questionType,
      code: { $ne: "" },
    }).select("-correctAnswer");
    questionsToSend = questionsToSend.concat(
      codeQuestions.sort(() => 0.5 - Math.random()).slice(0, 5)
    );
    const remainingQuestions = await Question.find({
      type: questionType,
      code: "",
    }).select("-correctAnswer");
    questionsToSend = questionsToSend.concat(
      remainingQuestions.sort(() => 0.5 - Math.random()).slice(0, 20)
    );
  }

  // Shuffle all the questions together
  questionsToSend = questionsToSend.sort(() => 0.5 - Math.random());
  user.lastVisited = new Date();
  await user.save(); // Save user object after modification
  res.json(questionsToSend);
});

app.post("/answer", validateToken, async (req, res) => {
  if (typeof req.body !== "object" || req.body === null) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const answers = req.body;
    let score = 0;
    let answeredQuestions = [];
    let count = 0;

    // get IDs of answered questions
    const questionIds = Object.keys(answers);

    // fetch only answered questions from the database
    const allQuestions = await Question.find({ _id: { $in: questionIds } });

    if (allQuestions.length !== questionIds.length) {
      return res.status(400).json({ error: "Some question IDs are invalid" });
    }

    for (let question of allQuestions) {
      if (
        !answers[question._id] ||
        typeof answers[question._id].choosenAnswer !== "string"
      ) {
        return res
          .status(400)
          .json({ error: "Invalid request body structure" });
      }

      let userAnswer = answers[question._id].choosenAnswer;

      if (userAnswer !== "No answer") {
        count = count + 1;
      }
    }

    console.log("count", count);

    for (let question of allQuestions) {
      let userAnswer = answers[question._id].choosenAnswer;
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

    user.totalScore = score;
    user.testCompleted = true;
    user.answers = answeredQuestions;

    try {
      await user.save();
    } catch (error) {
      console.error(`Error saving user: ${error}`);
      return res.status(500).json({
        error: "Error updating user",
      });
    }

    res.status(200).json({
      success: true,
      message: "Response saved successfully!",
      score,
      firstName: user.firstName,
      lastName: user.lastName,
      answeredQuestions: answeredQuestions,
    });

    const answersTable = answeredQuestionsToHtmlTable(answeredQuestions);

    const email = {
      to: [process.env.EMAIL1, process.env.EMAIL2, process.env.EMAIL3],
      from: "assessment@cognitiveclouds.com",
      subject: ` ${user.nickname} - React Native MCQ Test Result`,
      html: `${user.nickname} has scored ${score}/${count}. Here are the responses given by ${user.firstName}: ${answersTable}`,
    };
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

app.post("/getResults", validateToken, async (req, res) => {
  let { type, value } = req.body; // extract type and value from body
  // trim leading and trailing white spaces from the value
  value = value.trim();

  if (!type || !value) {
    return res.status(400).json({ error: "Missing email or type parameter" });
  }

  if (type !== "email" && type !== "userEmail") {
    return res.status(400).json({ error: "Invalid type parameter" });
  }

  try {
    let users = [];
    if (type === "email") {
      users = await User.find({ email: value });
    } else if (type === "userEmail") {
      users = await User.find({ userEmail: value });
    }

    if (!users || users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
    });
  }
});

app.post("/changePassword", validateToken, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: "Missing current or new password" });
  }

  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // check if current password is correct
    const isMatch = await user.comparePassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({ error: "Current password is incorrect" });
    }

    // update the password
    user.password = newPassword;

    // this allows 'save' middleware to run, hashing the password
    await user.save();

    return res
      .status(200)
      .json({ success: true, message: "Password changed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
    });
  }
});
app.post("/forgotPassword", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash token and set to password reset token field
    user.passwordResetToken = resetToken;

    // Set token expire time to 1 hour from now
    user.passwordResetExpires = Date.now() + 3600000;

    await user.save();

    // Send reset token to user via email (omitted for simplicity)
    // You can use a library like nodemailer to send the token to the user's email address.

    return res.status(200).json({ message: "Password reset token sent" });
  } catch (error) {
    res.status(500).json({ message: "Error processing request", error: error });
  }
});
app.post("/resetPassword", async (req, res) => {
  const { resetToken, newPassword } = req.body;

  if (!resetToken || !newPassword) {
    return res.status(400).json({ error: "Missing token or new password" });
  }

  try {
    const user = await User.findOne({
      passwordResetToken: resetToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Invalid or expired reset token" });
    }

    // Change the password and clear reset token fields
    user.password = newPassword;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    return res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    res.status(500).json({ message: "Error processing request" });
  }
});

app.get("/healthcheck", async (req, res) => {
  try {
    // Here you can check the status of your service or database
    // For example, if you're using mongoose you can do something like this:
    await mongoose.connection.db.admin().ping();

    res.status(200).json({ status: "Healthy" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "Unhealthy", error: error.toString() });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
