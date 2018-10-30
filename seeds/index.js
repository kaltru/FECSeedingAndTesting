var db = require('../db.js');
var chefSeed = require('./chef.js');

Promise = require('bluebird');

db.connection.sync({ force: true })
  .then(chefSeed)
  .then(function () {
  var eventSeed = require('./event.js');
  var ratingSeed = require('./rating.js');
  var userSeed = require('./user.js');
  var orderSeed = require('./order.js');

})


