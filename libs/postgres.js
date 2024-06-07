const { Client } = require('pg');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require('../config/config').config;

async function getConnection() {
  const client = new Client({
    host: DB_HOST,
    port: 5432,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });
  await client.connect();
  return client;
}

module.exports = getConnection;
