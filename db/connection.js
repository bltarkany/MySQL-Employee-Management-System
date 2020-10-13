const mysql = require('mysql2');
const util = require('util');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect();

// setup up connection.query into promise format to be able to async/await 
// https://nodejs.org/api/util.html#util_util_promisify_original

connection.query = util.promisify(connection.query);

module.exports = connection;