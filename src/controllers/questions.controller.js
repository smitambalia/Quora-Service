const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");

async function pingQuestions(req, res) {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "Ping worked in Questions controller !",
    data: [],
    error: {},
  });
}

async function postNewQuestion(req,res,next) {
    try {
        throw new NotImplementedError("postNewQuestion");
    } catch (error) {
        next(error)
    }
}
async function searchQuestion(req,res,next) {
    try {
        throw new NotImplementedError("searchAQuestion");
    } catch (error) {
        next(error)
    }
}

module.exports = {
    pingQuestions,
    postNewQuestion,
    searchQuestion
}
