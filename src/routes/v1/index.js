const express = require("express");
const userRouter = require("./users.routes");
const questionRouter = require("./questions.routes");
const answerRouter = require("./answer.routes");
const commentRouter = require("./comments.routes");
const v1Router = express.Router();

v1Router.use("/users",userRouter);
v1Router.use("/questions",questionRouter);
v1Router.use("/answers",answerRouter);
v1Router.use("/comments",commentRouter);

module.exports = v1Router;