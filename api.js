var config = require('./config.js');
var r = require('rethinkdb');
var connection;

module.exports.init = function (callback) { 
  r.connect(config.db, function (c) {
    connection = c;
    callback();
  });
};

module.exports.ping = function (data, callback) {
  callback.call(null, new Date());
};

module.exports.reset = function (data, callback) {
  r.dbDrop(config.db.db).run({callback:function () {
    callback.call(true);
  }})
};
