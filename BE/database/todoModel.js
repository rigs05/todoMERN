const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  //     required: true,
  //   },
});

const todoModel = model("list", todoSchema, "list");

module.exports = todoModel;
