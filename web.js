module.exports.main = function () {
  var express = require('express');
  var app = express();

  var api = require('./api.js');

  app.get('/ping', function (req, res) {
    api.ping(null, function (data) {
      res.json(data);
    });
  });

  app.listen(4001);
};
