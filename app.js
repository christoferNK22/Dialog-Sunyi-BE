const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb')
const Article = require('./models/article.model.js');
const Class = require('./models/class.model.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
// app.use("/article", articleRoute);
// app.use("/classes", classRoute);
// app.use("/comment", commentRoute);

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
app.post('/classes', async (req, res) => {
    try {
        const classes =  await Class.create(req.body);
        res.status(200).json(classes)
    } catch (error) {
        res.status(500).json({message: error.message})
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

