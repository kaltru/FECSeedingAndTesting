Promise = require('bluebird');
var faker = require('faker');
var db = require('../db.js');

// const Chef = orm.define('chef', {
//     city: Sequelize.TEXT,
//     description: Sequelize.TEXT,
//     email: Sequelize.STRING,
//     imageUrl: Sequelize.STRING,
//     name: Sequelize.STRING,
//     password: Sequelize.STRING,
//     username: Sequelize.STRING,
//     stateName: Sequelize.TEXT,
//     streetAddress: Sequelize.TEXT,
//     zip: Sequelize.INTEGER,
//     createdAt: {
//       type: 'TIMESTAMP',
//       allowNull: false,
//     },
//     updatedAt: {
//       type: 'TIMESTAMP',
//       allowNull: false,
//     },
//   });

// var fakeData = new Array(100);
// Promise.each([{}, {}], function (item) {
// Promise.each(fakeData, function () {
module.exports = () => Promise.each(new Array(100), function () {

    let item = {};

    item.city = faker.address.city();
    item.description = faker.commerce.productAdjective();
    item.email = faker.internet.email();
    item.imageUrl = faker.image.imageUrl();
    item.name = faker.name.findName();
    item.password = faker.internet.password();
    item.username = faker.internet.userName();
    item.state = faker.address.state();
    item.streetAddress = faker.address.streetAddress();
    item.zip = faker.address.zipCode();

    // return db.create(item).save();
    return db.Chef.create(item);
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('Chef seeded');
});