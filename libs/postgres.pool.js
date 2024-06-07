
const { Pool } = require('pg');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require('../config/config').config;


const pool = new Pool({
    host: DB_HOST,
    port: 5432,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  });



module.exports = pool;
