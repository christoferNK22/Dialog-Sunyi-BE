const express = require("express");
const Comment = require("../models/comment.model.js");
const router = express.Router();
const {getComments, getComment, createComment} = require('../controllers/comment.controller.js');

router.get('/comments', getComments);

router.get('/comment/:id', getComment);

router.post("/comment", createComment);

module.exports = router;