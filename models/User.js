const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  password: String,
  phone: String,
  firstName: String,
  lastName: String,
  nickname: { type: String }, // new field
  userEmail: { type: String }, // new field
  testCompleted: {
    type: Boolean,
    default: false, // by default, user has not completed the test
  },
  totalScore: {
    type: Number,
    default: false, // by default, user has not completed the test
  },
  admin: {
    type: Boolean,
    default: false, // by default, user has not completed the test
  },
  answers: [
    {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        default: false,
      },
    },
  ], // New field for storing answers
});

UserSchema.methods.comparePassword = async function(candidatePassword) {
  const match = await bcrypt.compare(candidatePassword, this.password);
  return match;
}

const User = mongoose.model("User", UserSchema);
module.exports = User;