const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', function(req, res) {
    res.send('We are home!');
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log('Connected to DB!')
});

app.listen(3000);