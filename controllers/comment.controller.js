const mongoose = require('mongoose');
const Comment = require('../models/comment.model');

const getComments =  async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan semua comment",
            data: comments
        })
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const commentId = mongoose.Types.ObjectId(id);
        
        const foundComment = await Comment.findById(commentId);
        
        if (!foundComment) {
            return res.status(404).json({
              status: "error",
              message: "Komentar tidak ditemukan",
            });
          }

          const response = {
            id: foundComment._id,
            name: foundComment.name,
            comment: foundComment.comment,
            id_artikel: foundComment.id_artikel,
            date: foundComment.date,
          };
      
          res.status(200).json({
            status: "success",
            message: "Berhasil mendapatkan komentar",
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

const createComment = async (req, res) => {
    try {
        const newComment =  await Comment.create(req.body);
        const savedComment = await newComment.save();
        res.status(200).json({
            status: "success",
            message: "Komentar sudah dikirim",
            data: savedComment,
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getComments,
    getComment,
    createComment
};