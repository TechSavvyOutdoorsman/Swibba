const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const app = express();

// Express Middleware

app.use(express.json());

// DB Config

const db = require('./config/keys').mongoURI;

// Connect to MongoDB

const client = new MongoClient(db, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perfom actions on the collection object
    client.close();
});


const port = process.env.PORT;

app.listen(port, () => console.log(`Server started on port ${port}`));

/*
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err));

const port = process.env.PORT || 2500;

app.listen(port, () => console.log(`Server started on port ${port}`));

*/