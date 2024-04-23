const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const { QuestionService } = require("../services");
const { QuestionRepository } = require("../repositories");
const MissionParams = require("../errors/missingParams.error");

const questionService = new QuestionService(new QuestionRepository());

async function pingQuestions(req, res) {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Ping worked in Questions controller !",
    data: [],
    error: {},
  });
}

async function postNewQuestion(req, res, next) {
  try {
    const question = await questionService.postQuestion(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully posted a new question!",
      data: question,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}
async function searchQuestion(req, res, next) {
  try {
    if(!req.query.text && !req.query.tag) {
        const params = ["text","tag"];
        throw new MissionParams(params);
    }
    console.log(req.query.text)
    const questions = await questionService.searchQuestions(req.query.text, req.query.tag);
    return res.status(StatusCodes.OK).json({
        success : true,
        message : "Successfully searched questions",
        data : questions,
        error : {}
    })
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingQuestions,
  postNewQuestion,
  searchQuestion,
};
