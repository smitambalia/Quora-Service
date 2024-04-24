const express = require("express");
const answerRouter = express.Router();

const { answerController } = require("../../controllers")

answerRouter.get("/ping",answerController.pingAnswer);
answerRouter.put("/:answerId",answerController.updateAnswer)

module.exports = answerRouter;