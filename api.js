var config = require('./config.js');
var c, r = require('rethinkdb');

module.exports.init = function (callback) { 
  r.connect(config.db, function (conn) {
    c = conn;
    callback();
  });
};

module.exports.ping = function (data, callback) {
  callback.call(null, new Date());
};

module.exports.user = {

  get: function(data, callback) {
    console.log(data);
    r.db(config.db.db).table('user').run();
    r.table('user').get(data.id, 'username').run(callback);
  }
  
}

if (config.mode === 'development') {

  module.exports.reset = function (data, callback) {

    r.dbDrop(config.db.db).runp();
    r.dbCreate(config.db.db).runp();

    r.db(config.db.db).tableCreate({tableName:'user', primaryKey:'username'}).runp();

    r.db(config.db.db).table('user').run();

    r.table('user').insert(config.testUsers).runp();
    r.table('user').runp();

    callback(null);
  };

}
