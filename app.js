const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb')
const Article = require('./models/article.model.js');
const Class = require('./models/class.model.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

// get article
app.get('/articles/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const article = await Article.findById(id);
        res.status(200).json(article)
    } catch {
        res.status(500).json({message: error.message});
    }
});

// create article
app.post('/articles', async (req, res) => {
    try {
        const article =  await Article.create(req.body);
        res.status(200).json(article)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// edit article
app.put('/article/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const article = await Article.findByIdAndUpdate(id, req.body);

        if (!article) {
            return res.status(404).json({message: "Article not found"});
        }

        const updatedArticle = await Article.findById(id);
        res.status(200).json(updatedArticle);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a article
app.delete('/article/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const article = await Article.findByIdAndDelete(id);

        if (!article) {
            return res.status(404).json({ message: "Article not found" });
        }

        res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get class
app.get('/classes/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const classes = await Class.findById(id);
        res.status(200).json(classes)
    } catch {
        res.status(500).json({message: error.message});
    }
});

// create class
app.post('/classess', async (req, res) => {
    try {
        const classes =  await Class.create(req.body);
        res.status(200).json(classes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// edit class
app.put('/classes/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const classes = await Class.findByIdAndUpdate(id, req.body);

        if (!classes) {
            return res.status(404).json({message: "Class not found"});
        }

        const updatedClass = await Class.findById(id);
        res.status(200).json(updateClass);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a class
app.delete('/classes/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const classes = await Class.findByIdAndDelete(id);

        if (!classes) {
            return res.status(404).json({ message: "Class not found" });
        }

        res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// get comment
app.get('/comments/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findById(id);
        res.status(200).json(comment)
    } catch {
        res.status(500).json({message: error.message});
    }
});

// create comments
app.post('/comments', async (req, res) => {
    try {
        const comment =  await Comment.create(req.body);
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

// edit comment
app.put('/comment/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const comment = await Comment.findByIdAndUpdate(id, req.body);

        if (!comments) {
            return res.status(404).json({message: "Comment not found"});
        }

        const updatedComment = await Comment.findById(id);
        res.status(200).json(updateComment);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// delete a comment
app.delete('/comment/:id', async (req, res) => {
    try {
        const {id} = req.params;

        const comment = await Comment.findByIdAndDelete(id);

        if (!comment) {
            return res.status(404).json({ message: "Comment not found" });
        }

        res.status(200).json({ message: "Article comment successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log('server is running');
});


mongoose.connect("mongodb+srv://christofernathanael116:8uBzTgIqxssAtGa4@dialog-sunyi.qlyn7xg.mongodb.net/Dialog-Sunyi?retryWrites=true&w=majority&appName=Dialog-Sunyi", 
    { /* connection options */ })
  .then(() => {
    console.log("Connected to database");
})
  .catch(() => {
    console.error("Connection failed");
});

