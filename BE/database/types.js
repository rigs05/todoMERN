// Zod Validation Schema
const zod = require("zod");

// Schema for adding todo items
const todoInputSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
});

// Schema for mark-as-done todo
const verifyTodoSchema = zod.object({
  id: zod.string(),
});

module.exports = { todoInputSchema, verifyTodoSchema };
