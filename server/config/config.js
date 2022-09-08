require('dotenv').config();

const dbUrl = process.env.Mongo_Uri;
const jwtKey = process.env.JwtKey;

module.exports = { dbUrl, jwtKey };