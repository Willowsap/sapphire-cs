const express = require('express');

const app = express();
a
app.use((req, res, next) => {
  console.log('first middleware');
  next();
})

app.use((req, res, next) => {
  res.send('Here\'s the server. Willow wrote this. It isn\'t really useful but here it is');
})

module.exports = app;
