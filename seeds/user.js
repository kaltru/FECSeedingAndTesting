var db = require('../db.js');
const faker = require('faker');


// const User = orm.define('user', {
//   name: Sequelize.STRING,
//   username: Sequelize.STRING,
//   authId: Sequelize.INTEGER,
//   email: Sequelize.STRING,
//   imageUrl: Sequelize.STRING,
//   createdAt: {
//     type: 'TIMESTAMP',
//     allowNull: false,
//   },
//   updatedAt: {
//     type: 'TIMESTAMP',
//     allowNull: false,
//   },
// });



Promise.each(new Array(50), function () {
  let item = {};
  item.name = faker.name.firstName();
  item.username = faker.name.firstName();
  item.authId = faker.id();
  item.email = faker.internet.email();
  item.imageUrl = faker.imageUrl();
  item.createdAt = faker.date.past();
  item.updatedAt = faker.date.recent();



  return db.User.create(item);
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('All Users have been seeded.');
});