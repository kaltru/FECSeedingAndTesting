const db = require('../db.js');
const faker = require('faker');

var randomName = faker.name.findName()



// const Rating = orm.define('rating', {
//   // foreign keys: chefId, userId
//   stars: Sequelize.INTEGER,
//   review: Sequelize.TEXT,
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
  var stars = Math.floor(Math.random() * 5);
  var review = faker.lorem.paragraph();
  return db.Rating.create({stars, review});
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('Ratings seeded')
})


