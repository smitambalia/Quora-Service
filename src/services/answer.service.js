const NotFoundError = require("../errors/notfound.error");
class AnswerService {
  constructor(answerRepository) {
    this.answerRepository = answerRepository;
  }
  async updateAnswer(answerId, answerData) {
    const answer = await this.answerRepository.updateAnswer(
      answerId,
      answerData
    );
    if (!answer) {
      throw new NotFoundError("answerID", answerId);
    }
    return answer;
  }
}

module.exports = AnswerService;
