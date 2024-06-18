const Article = require('../models/article.model');

const getArticles =  async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json(articles)
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article)
    } catch {
        res.status(500).json({message: error.message});
    }
};

const createArticle = async (req, res) => {
    try {
        const article =  await Article.create(req.body);
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getArticles,
    getArticle,
    createArticle
};