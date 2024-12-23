require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log("Database connected");
});

const quizSchema = new mongoose.Schema({
  num: Number,
  question: String,
  answer: Number,
  options: [String],
});

const Quiz = mongoose.model("Quiz", quizSchema);

app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/frontend/dist"));

app.get("/api/data", async (req, res) => {
  const data = await Quiz.find().sort({ num: -1 });
  res.json(data);
});

app.post("/api/data", async (req, res) => {
  const { num, question, answer, options } = req.body;
  const newQuiz = {
    num,
    question,
    answer,
    options,
  };
  const createdQuiz = await Quiz.create(newQuiz);
  res.redirect("/success");
});

app.get("/api/check", async (req, res) => {
  const { num, option } = req.query;
  const checkQuiz = await Quiz.findOne({ num });
  res.json({
    status: checkQuiz.answer == option ? true : false,
  });
});

app.delete("/api/data", async (req, res) => {
  const { num } = req.query;
  const deleteQuiz = await Quiz.findOneAndDelete({ num });
  res.redirect("/teacher");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/frontend/dist/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${listener.address().port}`);
});
