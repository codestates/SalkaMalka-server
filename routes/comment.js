const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController')


router.post('/', commentController.newCommentController)
router.post('/{commentId}/like', commentController.likeCommentController)
router.delete('/{commentId}', commentController.deleteCommentController)

module.exports = router;
