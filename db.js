/* all relationship data commented out so as to serve as notes but not affect DB schema */

const Sequelize = require('sequelize');

const orm = new Sequelize('FECSeedAndTesting', 'root', '', {
  dialect: 'mysql',
  logging: false,
});

orm
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

/* ///////////////////// */
/* MODELS (alphabetized) */
/* ///////////////////// */

// Ryan
const Chef = orm.define('chef', {
  city: Sequelize.TEXT,
  description: Sequelize.TEXT,
  email: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  username: Sequelize.STRING,
  stateName: Sequelize.TEXT,
  streetAddress: Sequelize.TEXT,
  zip: Sequelize.INTEGER,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// Stephen
const Event = orm.define('event', {
  // foreign key: chefId
  date: Sequelize.STRING,
  startTime: Sequelize.STRING,
  endTime: Sequelize.STRING,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});
 

const ItemEvent = orm.define('itemEvent', {
  // foreign keys: eventId, menuItemId, chefId
  quantity: Sequelize.INTEGER,
  reservations: Sequelize.INTEGER,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

const MenuItem = orm.define('menuItem', {
  // foreign keys: chefId
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT,
  imageUrl: Sequelize.STRING,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// Navira
const Order = orm.define('order', {
  // foreign keys: itemEventId, userId, transactionId
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// Uday
const Rating = orm.define('rating', {
  // foreign keys: chefId, userId
  stars: Sequelize.INTEGER,
  review: Sequelize.TEXT,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// Kalei
const Transaction = orm.define('transaction', {
  // foreign keys: userId, chefId
  status: Sequelize.STRING,
  total: Sequelize.FLOAT,
  tax: Sequelize.FLOAT,
  fee: Sequelize.FLOAT,
  tip: Sequelize.FLOAT,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// Fredrick
const User = orm.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  authId: Sequelize.INTEGER,
  email: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  createdAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
  updatedAt: {
    type: 'TIMESTAMP',
    allowNull: false,
  },
});

// /* //////////////////////////// */
// /* RELATIONSHIPS (alphabetized) */
// /* //////////////////////////// */
// Event.belongsTo(Chef);

// ItemEvent.belongsTo(MenuItem);
// ItemEvent.belongsTo(Event);
// ItemEvent.belongsTo(Chef);

// MenuItem.belongsTo(Chef);

// Order.belongsTo(ItemEvent);
// Order.belongsTo(Transaction);
// Order.belongsTo(User);

// Rating.belongsTo(Chef);
// Rating.belongsTo(User);

// Transaction.belongsTo(Chef);
// Transaction.belongsTo(User);

// /* ///////////// */
// /* Create Tables */
// /* ///////////// */
orm.sync();

exports.connection = orm;
exports.Chef = Chef;
exports.Event = Event;
exports.ItemEvent = ItemEvent;
exports.MenuItem = MenuItem;
exports.Order = Order;
exports.Rating = Rating;
exports.Transaction = Transaction;
exports.User = User;

