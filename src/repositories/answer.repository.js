const NotFoundError = require("../errors/notfound.error");
const { Answer } = require("../models");

class AnswerRepository {
  async updateAnswer(answerId, answerData) {
    try {
      const updatedAnswer = await Answer.findByIdAndUpdate(
        answerId,
        answerData,
        { new: true }
      );
      return updatedAnswer;
    } catch (error) {
      throw new error;
    }
  }
}

module.exports = AnswerRepository;
