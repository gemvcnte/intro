const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  lastName: String,
  firstName: String,
  emailAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birthDate: String,
  phoneNumber: String,
  role: {
    type: String,
    enum: ["admin", "teacher", "user"],
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = { User };
