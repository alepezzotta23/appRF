const express = require('express');

const app = express();

//Middleware

//Routes
app.get('/', function(req, res) {
    res.send('We are home!');
});

app.get('/posts', function(req, res) {
    res.send('We are on Posts!');
});


app.listen(3000);