var db = require('../db.js');

Promise = require('bluebird');

db.sync({ force: true }).then(function () {

})

var eventSeed = require('event.js');
var chefSeed = require('chef.js');
var orderSeed = require('order.js');
var ratingSeed = require('rating.js');
var userSeed = require('user.js');

