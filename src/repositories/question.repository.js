const { Question } = require("../models");

class QuestionRepository {
  async postQuestion(questionData) {
    try {
      const question = await Question.create(questionData);
      return question
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = QuestionRepository