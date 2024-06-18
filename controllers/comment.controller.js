const Comment = require('../models/comment.model');

const getComments =  async (req, res) => {
    try {
        const comments = await Comment.find();
        res.status(200).json(comments)
    } catch {
        res.status(500).json({message: error.message});
    }
}

const getComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        res.status(200).json(comment)
    } catch {
        res.status(500).json({message: error.message});
    }
};

const createComment = async (req, res) => {
    try {
        const comment =  await Comment.create(req.body);
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {
    getComments,
    getComment,
    createComment
};