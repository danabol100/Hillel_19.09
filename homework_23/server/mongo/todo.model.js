const { Schema, model } = require("mongoose");

const todoSchema = Schema({
  text: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Todos", todoSchema);
