const connection = require("../config/connection");

const getBooksFormDatabase = () => {
  return connection.query('SELECT * FROM books');
};
module.exports = {getBooksFormDatabase};
