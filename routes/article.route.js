const express = require("express");
const Article = require("../models/article.model.js");
const router = express.Router();
const {getArticles, getArticle, createArticle} = require('../controllers/article.controller.js');

router.get('/articles', getArticles);

router.get('/article/:id', getArticle);

router.post("/article", createArticle);

module.exports = router;
