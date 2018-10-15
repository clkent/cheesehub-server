//mongoimport --db cheeses --collection cheeseList --drop --file ~/Sites/Thinkful/week8/cheesehub/server/db/cheese.json
//do this instead to seed db ^

'use strict';

// const mongoose = require('mongoose');

// const { DATABASE_URL } = require('../config');
// const Cheese = require('../models/cheese');

// const { cheeseList } = require('../db/cheese');

// mongoose
//   .connect(
//     DATABASE_URL,
//     { useNewUrlParser: true }
//   )
//   .then(() => mongoose.connection.db.dropDatabase())
//   .then(() => {
//     return Promise.all([Cheese.insertMany(cheeseList)]);
//   })
//   .then(() => mongoose.disconnect())
//   .catch(err => {
//     console.error(err);
//   });

