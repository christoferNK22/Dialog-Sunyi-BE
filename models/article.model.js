const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter name"]
        },
        image: {
            type: String,
            required: [true, "Input image"]
        },
        content: {
            type: String,
            required: [true, "Please enter content"]
        },
        date: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true,
    }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
