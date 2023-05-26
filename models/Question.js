const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
    code: { type: String }, // Added this line
    type: { type: String, required: true }, // Added this line
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Question", questionSchema);
