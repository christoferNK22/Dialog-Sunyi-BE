const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"]
        },
        comment: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now
        },
        id_artikel: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Article'
        }
    },
    {
        timestamps: true,
    }
);

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;