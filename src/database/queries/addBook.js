const connection = require("../config/connection");

const addBookQuery = (title, picture, author, status = true) => {
  const sql = {
    text: "INSERT INTO Books (author, title, picture, status) VALUES ($1, $2, $3, $4) RETURNING *",
    values: [author, title, picture, status],
  };
  return connection.query(sql);
};
module.exports = {addBookQuery};
