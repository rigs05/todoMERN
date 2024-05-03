const Router = require("express").Router();
const { todoInputSchema } = require("../database/types");
const todoModel = require("../database/todoModel");

Router.post("/todo", async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const list = todoInputSchema.safeParse({ title, description });
    console.log(list);
    // const markAsCompleted = todoInputSchema.safeParse(req.body.markAsCompleted);
    // const addTodo = new todoModel({
    //   title: list.data.title,
    //   description: list.data.description,
    // });
    const addTodo = new todoModel(list.data);
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
      };
    });
    res.status(200).json(list);
  } catch (err) {}
});

Router.put("/completed", async (req, res) => {});

// module.exports = Router;
module.exports = Router;
