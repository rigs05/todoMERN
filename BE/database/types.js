// Zod Validation Schema
const zod = require("zod");

// Schema for adding todo items
const todoInputSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

// Schema for mark-as-done todo
// const updateTodoSchema = zod.object({
//   id: zod.string(),
// });
const updateTodoSchema = zod.string();

module.exports = { todoInputSchema, updateTodoSchema };
