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
});

module.exports = mongoose.model("User", UserSchema);
