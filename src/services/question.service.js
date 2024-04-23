class QuestionService {
    constructor(questionRepository) {
        this.questionRepository = questionRepository;
    }

    async postQuestion(questionData) {
        try {
            const question = await this.questionRepository.postQuestion(questionData);
            return question;
        } catch (error) {
            throw new error;
        }
    }

    async searchQuestions(text,tag) {
        try {   
            console.log("Text:",text)
            const questions = await this.questionRepository.searchQuestions(text,tag)
            return questions;
        } catch (error) {
            throw new error;
        }
    }
}

module.exports = QuestionService