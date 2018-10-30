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

  const hour = Math.floor(Math.random() * 24);
  const min = Math.floor(Math.random() * 60);
  const sec = Math.floor(Math.random() * 60);
  const startTime = `${hour}:${min}:${sec} GMT-0700 (Pacific Daylight Time)`;

  const endHour = Math.floor(Math.random() * 24);
  const endMin = Math.floor(Math.random() * 60);
  const endSec = Math.floor(Math.random() * 60);
  const endTime = `${endHour}:${endMin}:${endSec} GMT-0700 (Pacific Daylight Time)`;

  const chefId = Math.ceil(Math.random() * 100);

  return db.Event.create({ date, startTime, endTime, chefId });
}).then(function (data) {
  // data is an Array with the returned values of all promises
  console.log('events seeded')
})

