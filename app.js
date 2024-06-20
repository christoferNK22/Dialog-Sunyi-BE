const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const articleRoute = require('./routes/article.route.js');
const classRoute = require('./routes/class.route.js');
const commentRoute = require('./routes/comment.route.js');
const Article = require('./models/article.model.js');
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api", articleRoute);
app.use("/api", classRoute);
app.use("/api", commentRoute);

app.get('/', (req, res) => {
    res.send("Welcome to my API");
});

app.get('/api/article/:id', async (req, res) => {
  try {
    const {id} = req.params.id;
    const article = await Article.findById(id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json(article);
  }
});

// call port from env
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
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

