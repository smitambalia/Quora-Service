const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
  topicTags: [String],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
