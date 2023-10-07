const home = require('express').Router();
const path = require('path');

// Define a route for the root URL ("/")
home.get('/', (req, res) => {
  // Send the index.html file
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = home;
