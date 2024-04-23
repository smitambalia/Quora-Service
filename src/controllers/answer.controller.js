const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");

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
        throw new NotImplementedError("updateAnswer")
    } catch (error) {
        next(error);
    }
}

module.exports = {
  pingAnswer,
  updateAnswer
};
