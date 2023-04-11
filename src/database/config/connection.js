const { Pool } = require("pg");

require("dotenv").config();

let DB_URL = process.env.DB_URL;
console.log(DB_URL)


const connection = new Pool({
  connectionString: DB_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

module.exports = connection;
