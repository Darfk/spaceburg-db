var r = require('rethinkdb');

module.exports.ping = function (data, callback) {
  callback.call(null, new Date());
};
