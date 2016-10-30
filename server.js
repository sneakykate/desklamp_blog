const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const postController = require('./server/postController');

const app = express();

const mongoURI = 'mongodb://localhost:27017/test';
mongoose.connect(mongoURI);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


// app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, './')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/posts', postController.getAllPosts);


app.listen(3000, () => {
  console.log('listening on 3000');
});

module.exports = app;
