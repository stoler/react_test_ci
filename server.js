const express = require('express');
const path = require('path');
const app = express();

app.use('/build', express.static(path.join(__dirname, './build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

const server = app.listen(3000);