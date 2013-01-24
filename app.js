var express = require('express');
var app = express();

app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/ping', function (req, res) {
  res.send({datetime: new Date()});
});

app.listen(8081);


