const jwt = require('jsonwebtoken');
import { config } from './../config/config';

const { jwtSecret, apiKey } = config;
console.log(jwtSecret, apiKey);


const secret = jwtSecret;
const token = apiKey

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
