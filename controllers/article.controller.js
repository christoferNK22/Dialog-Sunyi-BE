const mongoose = require('mongoose');
const Article = require('../models/article.model');

const getArticles =  async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan semua artikel",
            data: articles,
        });
    } catch (error) {
        if (error.name === 'MongoError') {
          return res.status(500).json({
            status: "error",
            message: "Kesalahan database",
          });
        }
        console.error(error);
        res.status(500).json({
          status: "error",
          message: "Kesalahan server",
        });
    }
};

const getArticle = async (req, res) => {
    try {
      const { id } = req.params;
      const articleId = mongoose.Types.ObjectId(id);
    
      const foundArticle = await Article.findById(articleId);
        
      if (!foundArticle) {
        return res.status(404).json({
          status: "error",
          message: "Artikel tidak ditemukan",
        });
      }

      const { _id, name, image, content, author, date } = foundArticle;

      const response = {
        id: _id,
        name,
        image,
        content,
        author,
        date,
      };
  
      res.status(200).json({
        status: "success",
        message: "Berhasil mendapatkan artikel",
        data: response,
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