const Article = require('../models/article.model');

const getArticles =  async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan semua artikel",
            data: articles
        });
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getArticle = async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        
        if (!article) {
            return res.status(404).json({
              status: "error",
              message: "Artikel tidak ditemukan",
            });
          }
      
          res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan artikel",
            data: article,
          });
    } catch (error) { 
        console.error(error); 
        res.status(500).json({
          status: "error",
          message: "Kesalahan server", 
        });
      }
};

const createArticle = async (req, res) => {
    try {
      const newArticle = new Article(req.body);
      const savedArticle = await newArticle.save();
      res.status(201).json({
        status: "success",
        message: "Artikel berhasil dibuat",
        data: savedArticle,
      });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  };
  

module.exports = {
    getArticles,
    getArticle,
    createArticle
};