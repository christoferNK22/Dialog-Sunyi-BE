const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

const uri = "mongodb+srv://christofernathanael116:8uBzTgIqxssAtGa4@dialog-sunyi.qlyn7xg.mongodb.net/?retryWrites=true&w=majority&appName=Dialog-Sunyi";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// Middleware
// app.use(bodyParser.json());

// Routes
// const indexRouter = require('./routes/index');
// const articlesRouter = require('./routes/articles');
// const classesRouter = require('./routes/classes');
// const faqsRouter = require('./routes/faqs');

// app.use('/', indexRouter);
// app.use('/articles', articlesRouter);
// app.use('/classes', classesRouter);
// app.use('/faqs', faqsRouter);


// Connect to MongoDB
mongoose.connect(uri, { /* connection options */ })
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('server is running');
    });
})
  .catch(() => {
    console.error("Connection failed");
});

