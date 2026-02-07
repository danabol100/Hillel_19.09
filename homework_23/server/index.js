const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todoModel = require("./mongo/todo.model");

const connect = mongoose.connect(
  "mongodb+srv://danabol100_db_user:admin123@cluster0.aoxs54s.mongodb.net/?appName=Cluster0",
);
connect.then(() => console.log("DB connected successfully"));

app.use(cors());
app.use(express.json());
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

app.get("/", (req, res) => {
  todoModel.find().then((data) => res.send(data));
});

app.post("/add", (req, res) => {
  const newTodo = new todoModel(req.body);
  newTodo.save().then((data) => res.send(data));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todoModel.deleteOne({ _id: id }).then((data) => {
    if (!data.deletedCount) {
      res.status(404).send({ todo: "Todo not found" });
    } else {
      res.send(data);
    }
  });
});
app.put("/todos/:id", async (req, res) => {
  const updated = await todoModel.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text, checked: req.body.checked },
    { new: true },
  );
  res.json(updated);
});
