const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');
const jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.json());

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

// GET API to return 15 random questions
app.get('/questions', validateToken, (req, res) => {
    let randomQuestions = [];
    for (let i = 0; i < 15; i++) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        randomQuestions.push(questions[randomIndex]);
    }
    res.json(randomQuestions);
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
