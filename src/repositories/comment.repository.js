const { Comment } = require("../models");

class CommentRepository {
    async postCommentOnComment(commentId,commentData) {
        try {
            const getComment = await Comment.findById(commentId);
            if(getComment) {
                const comment = await Comment.create({

                })
            }
            
        } catch (error) {
            throw new error;
        }
    }
}

module.exports = CommentRepository