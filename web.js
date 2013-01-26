var express = require('express');
var app = express();
var util = require('util');

var api = require('./api.js');

app.get('/reset', function (req, res) {
  api.reset(null, function (data) {
    res.json(data);
  });
});


module.exports.init = function () {
  app.listen(4001);
};


var ping = function (req, res) {
  api.ping(null, jsonOut(res));
};

jsonOut = function (res) {
  return function (data) {
    res.json(data);
  }
}

var user = {
  get: function (req, res) {
    api.user.get(req.params, jsonOut(res));
  }
};

app.get('/user/:id', user.get);
app.get('/ping', ping);

