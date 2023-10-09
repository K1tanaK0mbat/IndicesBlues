// Immediately export a function that generates a string of random numbers and letters
const { v4: uuidv4 } = require('uuid');

const generateUUID = () => uuidv4();

module.exports = generateUUID;
