const express = require("express");
const userRouter = express.Router();
const { userController } = require("../../controllers");

userRouter.get("/ping",userController.pingUserContoller);
userRouter.post("/",userController.createUser)
userRouter.get("/:id",userController.getUser)
userRouter.put("/:id",userController.updateUser)

module.exports = userRouter;
