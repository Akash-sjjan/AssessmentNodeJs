const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();
const _ = require('lodash');

app.use(bodyParser.json());

let users = [];
let questions = [];

// Read CSV file and populate the 'questions' array
fs.createReadStream('questions.csv')
    .pipe(csv())
    .on('data', (row) => {
        questions.push(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

// Validate token
function validateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'SECRET_KEY', (err, user) => {
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

// POST API for user signup
app.post('/signup', async (req, res) => {
    // validate request body
    if (!req.body.email || !req.body.password || !req.body.confirmPassword) {
        return res.status(400).json({ message: "Email and Password are required." });
    }

    if (req.body.password !== req.body.confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match." });
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // add the user to the 'database'
    users.push({
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    res.json({ message: "User signed up successfully" });
});

// POST API for user login
app.post('/login', async (req, res) => {
    const user = users.find(u => u.email === req.body.email);

    if (user && await bcrypt.compare(req.body.password, user.password)) {
        // Create a new token with the username in the payload
        const token = jwt.sign({ email: user.email }, 'SECRET_KEY');
        res.json({ message: "User logged in successfully", token: token });
    } else {
        res.json({ message: "Invalid credentials" });
    }
});

// GET API to return 15 random questions
app.get('/questions', validateToken, (req, res) => {
    let id = 0; // initialize id
    const questionsArray = [];
    fs.createReadStream('./questions.csv')
    .pipe(csv())
    .on('data', (row) => {
        questionsArray.push({
            id: ++id,  // increment id for each question
            question: row['Qustions'].trim(),
            options: [
                row['Option 1'].trim(),
                row['Option 2'].trim(),
                row['Option 3'].trim(),
                row['Option 4'].trim()
            ]
        });
    })
    .on('end', () => {
        const shuffled = _.shuffle(questionsArray);
        const selected = _.slice(shuffled, 0, 15);
        res.json(selected);
    });
});


// POST API to accept answered option
app.post('/answer', validateToken, (req, res) => {
    const { question, answeredOption } = req.body;
    // Do something with the answered option
    res.json({ message: 'Answer received.' });
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
