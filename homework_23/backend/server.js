const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./mongo/todo.model");

const connect = mongoose.connect(
  "mongodb+srv://danabol100_db_user:<db_password>@cluster0.aoxs54s.mongodb.net/?appName=Cluster0node"
);
connect.then(() => console.log("DB connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on localhost:8080...");
});
