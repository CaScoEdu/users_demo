// Import required modules

const EXPRESS = require('express');
const BODY_PARSER = require('body-parser');
const CORS = require('cors');

// Create an instance of Express

const APP = EXPRESS();

// Middleware setup

APP.use(BODY_PARSER.json());
APP.use(CORS());

// Server port
const PORT = process.env.PORT || 3000;

// Import the users routes

const USERS_ROUTES = require('./routes/users');


// Use the users routes

APP.use('/api', USERS_ROUTES);

// Start the server

APP.listen(PORT, () => {

  console.log(`Server is listening on port ${PORT}!`);

})