var db = require('../db.js');

Promise = require('bluebird');

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


Promise.each(new Array(100), (item) => {

  let order = {}

  order.itemEventId = Math.floor(Math.random() * 100);
  order.userId = Math.floor(Math.random() * 100);
  order.transactionId = Math.floor(Math.random() * 100);

  return db.Order.create(item);
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('orders seeded');
})
