const connection = require('../config/connection');

const borrowBookQuery = (bookId, borrowID) => {
    return connection.query('UPDATE books SET borrowid = $2 WHERE id = $1', [bookId, borrowID]);
  }
module.exports = { borrowBookQuery}