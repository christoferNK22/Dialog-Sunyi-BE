const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb')
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to my API");
});


app.post('/articles', (req, res) => {
    console.log(req.body);
    res.send(req.body);
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

