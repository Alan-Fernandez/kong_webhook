// logger.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'app.log');

const info = (message) => {
  console.log(`Info: ${message}`);
  fs.appendFileSync(logFilePath, `Info: ${message}\n`);
};

const error = (message) => {
  console.error(`Error: ${message}`);
  fs.appendFileSync(logFilePath, `Error: ${message}\n`);
};

module.exports = {
  info,
  error,
};
