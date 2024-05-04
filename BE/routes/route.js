const Router = require("express").Router();
const { todoInputSchema, updateTodoSchema } = require("../database/types");
const todoModel = require("../database/todoModel");

Router.post("/todo", async (req, res) => {
  try {
    const createPayload = req.body;
    const list = todoInputSchema.safeParse(createPayload);
    // console.log(list);
    if (!list.success) {
      return res.status(411).json({ msg: "You sent the wrong inputs." });
    }

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
  const { id } = req.body;
  // console.log(id);
  const parsedId = updateTodoSchema.safeParse({ id: id });
  console.log(parsedId);
  if (!parsedId.success) {
    return res.status(411).json({ msg: "You sent the wrong id." });
  }
  await todoModel.updateOne(
    {
      _id: parsedId.data.id,
    },
    { $set: { completed: true } }
  );
  res.json({ msg: "Todo marked as completed." });
});

// module.exports = Router;
module.exports = Router;
