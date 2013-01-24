module.exports.init = function () {
  var express = require('express');
  var app = express();

  var r = require('rethinkdb');

  var api = require('./api.js');

  app.get('/ping', function (req, res) {
    api.ping(null, function (data) {
      res.json(data);
    });
  });

  app.get('/reset', function (req, res) {
    api.reset(null, function (data) {
      res.json(data);
    });
  });

  app.listen(4001);
};
