const express = require('express');
const mysql = require('mysql');
const util = require('util');
//const dotenv = require('dotenv');

//dotenv.config();

const app = express();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME
});

pool.query = util.promisify(pool.query);

module.exports = pool;
