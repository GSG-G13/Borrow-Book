const { Pool } = require("pg");
require("dotenv").config();

let dbUrl = "";
let ssl = false;

if (!process.env.DB_URL) throw new Error("No Database URL!!!");
if (process.env.NODE_ENV === "test") {
  dbURl = process.env.Test_DB_URL;
} else if (process.env.NODE_ENV === "development") {
  dbURl = process.env.DEV_DB_URL;
} else if (process.env.NODE_ENV === "production") {
  dbURl = process.env.DB_URL;
  ssl = true;
}
if (!dbURl) throw new Error("No Database URL!!!");

const options = {
  connectionString: dbURl,
  ssl,
};

const dbConnection = new Pool(options);
module.exports = dbConnection;