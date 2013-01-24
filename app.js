var api = require('./api.js');
var web = require('./web.js');

api.init(function () {
  web.init();
});

