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
Promise.each(new Array(100), function () {    

    let item = {};

    item.randomCity = faker.address.city();
    item.randomDescription = faker.commerce.productAdjective();
    item.randomEmail = faker.internet.email();
    item.randomImageUrl = faker.image.imageUrl();
    item.randomName = faker.name.findName();
    item.randomPassword = faker.internet.randomPassword();
    item.randomUsername = faker.internet.userName();
    item.randomState = faker.address.state();
    item.randomStreetAddress = faker.address.streetAddress();
    item.randomZip = faker.address.zipCode();

    // return db.create(item).save();
    return db.Chef.create(item);
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('Chef seeded');
});