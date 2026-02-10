const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

module.exports = model("Login", loginSchema);
