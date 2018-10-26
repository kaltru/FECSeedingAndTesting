var db = require('../db.js');

Promise = require('bluebird');

Promise.each(new Array(100), (item) => {

  let order = {}

  order.itemEventId = itemEventId + 1;
  order.userId = userId + 1;
  order.transactionId


  { itemEventId: 1, userId: 2, transactionId: 5, created_at: new Date(), updated_at: new Date() }

  //   type: Sequelize.INTEGER,
  //   autoIncrement: true,
  // }
  // var userId = {
  //   type: Sequelize.INTEGER,
  //   autoIncrement: true,
  // }
  // var transactionId = {
  //   type: Sequelize.INTEGER,
  //   autoIncrement: true,
  // }


  return db.create(item).save();
}).then(function (data) {
  // data is an Array with the returned values of all promises
})


function seed() {
  let dbInit = new Sequelize('', USER, PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
  });



// const Order = orm.define('order', {
//   // foreign keys: itemEventId, userId, transactionId
//   createdAt: {
//     type: 'TIMESTAMP',
//     allowNull: false,
//   },
//   updatedAt: {
//     type: 'TIMESTAMP',
//     allowNull: false,
//   },
// });