const express = require("express");
const Article = require("../models/article.model.js");
const router = express.Router();
const {getArticles, getArticle, createArticle} = require('../controllers/article.controller.js');


router.get('/', getArticles);

router.get('/:id', getArticle);

router.post("/", createArticle);

module.exports = router;
