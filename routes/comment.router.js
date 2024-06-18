const express = require("express");
const Comment = require("../models/comment.model.js");
const router = express.Router();
const {getComments, getComment, createComment} = require('../controllers/comment.controller.js');

router.get('/', getComments);

router.get('/:id', getComment);

router.post("/", createComment);

module.exports = router;