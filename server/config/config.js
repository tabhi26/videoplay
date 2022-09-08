require('dotenv').config();

const dbUrl = process.env.Mongo_Uri;
const jwtKey = process.env.JwtKey;
const port = process.env.PORT;

module.exports = { dbUrl, jwtKey, port };