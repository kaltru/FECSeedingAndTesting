var db = ('../db.js');

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

Promise.each([{}, {}], function (item) {
  var stars = faker.random.number();
  var review = faker.random.words();
  return db.create(item).save();
}).then(function (data) {
  // data is an Array with the returned values of all promises
})


