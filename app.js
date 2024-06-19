const express = require('express');
const mongoose = require('mongoose');
const articleRoute = require('./routes/article.route.js');
const classRoute = require('./routes/class.route.js');
const commentRoute = require('./routes/comment.route.js');
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/article", articleRoute);
app.use("/class", classRoute);
app.use("/comment", commentRoute);

app.get('/', (req, res) => {
    res.send("Welcome to my API");
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

