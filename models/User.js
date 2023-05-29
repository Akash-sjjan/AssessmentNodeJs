const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  phone: String,
  firstName: String,
  lastName: String,
  nickname: { type: String }, // new field
  testCompleted: {
    type: Boolean,
    default: false, // by default, user has not completed the test
  },
  totalScore: {
    type: Number,
    default: false, // by default, user has not completed the test
  },
  answers: [{
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    },
    isCorrect: {
      type: Boolean,
      default: false
    }
  }],// New field for storing answers
});

module.exports = mongoose.model("User", UserSchema);
