var db = require('../db.js');
const faker = require('faker');

/* approach
determine what parts of record need to fake from events:
  date: Sequelize.STRING,
  startTime: Sequelize.STRING,
  endTime: Sequelize.STRING,
  // createdAt: {
  //   type: 'TIMESTAMP',
  //   allowNull: false,
  // },
  // updatedAt: {
  //   type: 'TIMESTAMP',
  //   allowNull: false,
  // },
create fake record - will want some future and some past
faker.fake("{{date.future}}")
   how do i generate times for start and end?

db.create({ date })
call code to store that into DB --> look up Sequelize db.create documentaiton as reminder

*/

Promise.each(new Array(50), function (item) {  
  let date = faker.fake("{{date.future}}");
  return db.create({ date }).save();
}).then(function (data) {
  // data is an Array with the returned values of all promises
})

