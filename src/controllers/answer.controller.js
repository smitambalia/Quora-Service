const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const { AnswerService } = require("../services");
const { AnswerRepository } = require("../repositories");
const MissionParams = require("../errors/missingParams.error");
const answerService = new AnswerService(new AnswerRepository())
async function pingAnswer(req, res, next) {
  try {
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully received ping for answer controller",
      data: [],
      error: {},
    });
  } catch (error) {
    console.log(error);
    throw new error();
  }
}

async function updateAnswer(req,res,next) {
    try {
        if(!req.body.text) {
            const params = ["text"];
            throw new MissionParams(params);
        }
        const answer = await answerService.updateAnswer(
            req.params.answerId,
            req.body
        )
        console.log("Controller Answer")
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "Successfully updated an answer!",
            data : answer,
            error : {}
        })

    } catch (error) {
        next(error);
    }
}

module.exports = {
  pingAnswer,
  updateAnswer
};
