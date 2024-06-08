require('dotenv').config();

const {
  NODE_ENV,
  PORT,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME,
  DB_PORT,
  DB_URL,
  API_KEY_TOKEN
} = process.env;

const config = {
  env: NODE_ENV || 'dev',
  port: PORT || 3000,
  dbUser: DB_USER,
  dbPassword: DB_PASSWORD,
  dbHost: DB_HOST,
  dbName: DB_NAME,
  dbPort: DB_PORT,
  dbUrl: DB_URL,
  apiKeyToken: API_KEY_TOKEN,
}

module.exports = { config };
