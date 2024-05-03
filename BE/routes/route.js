const Router = require("express").Router();
const { todoInputSchema, updateTodoSchema } = require("../database/types");
const todoModel = require("../database/todoModel");

Router.post("/todo", async (req, res) => {
  try {
    const createPayload = req.body;
    const list = todoInputSchema.safeParse(createPayload);
    console.log(list);
    if (!list.success) {
      return res.status(411).json({ msg: "You sent the wrong inputs." });
    }
    // const markAsCompleted = todoInputSchema.safeParse(req.body.markAsCompleted);
    // const addTodo = new todoModel({
    //   title: list.data.title,
    //   description: list.data.description,
    // });
    const addTodo = await new todoModel({
      title: list.data.title,
      description: list.data.description,
      completed: false,
    });
    await addTodo.save();
    res.json({ message: "Todo Saved.", data: addTodo });
  } catch (error) {
    throw new Error("Cannot GET correct inputs." + error);
  }
});

Router.get("/todos", async (req, res) => {
  try {
    const wholeList = await todoModel.find();
    if (!wholeList) {
      return res.status(404).json({ message: "No todo list found." });
    }
    const list = wholeList.map((todo) => {
      return {
        title: todo.title,
        description: todo.description,
        completed: todo.completed,
      };
    });
    res.status(200).json(list);
  } catch (err) {}
});

Router.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedList = updateTodoSchema.safeParse(updatePayload);
  if (!parsedList.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs." });
  }
  await todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({ msg: "Todo marked as completed." });
});

// module.exports = Router;
module.exports = Router;
