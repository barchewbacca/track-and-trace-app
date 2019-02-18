const dotenv = require('dotenv');
const mongoose = require('mongoose');

// import environmental variables from our variables.env file
dotenv.config({ path: '.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(
  process.env.DATABASE,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// import all models
require('./models/Parcel');

// import the application
const app = require('./app');

// Serve the files on port ...
app.set('port', process.env.PORT || 4201);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
