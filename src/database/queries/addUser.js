const connection = require("../config/connection");

const addUser = (name, email, password, role, picture) => {
  const sql = {
    text: "INSERT INTO Books (name, email, password, role, picture) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [name, email, password, role, picture],
  };
  return connection.query(sql);
};
module.exports = addUser;
