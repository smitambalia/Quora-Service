const { CommentRepository } = require("../repositories");
const { CommentService } = require("../services");

const { StatusCodes } = require("http-status-codes");
const  NotImplementedError = require("../errors/notImplemented.error")
const commentService = new CommentService(new CommentRepository());


async function addCommentOnComment(req,res,next) {
    try {
        throw new NotImplementedError("addCommentOnComment");
    } catch (error) {
        next(error)
    }
}

module.exports  = {
    addCommentOnComment
} 