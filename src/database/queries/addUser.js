const connection = require("../config/connection");

const addUser = ({userName, firstName, lastName, email, password, role}) => {
  const sql = {
    text: "INSERT INTO users (username, firstname, lastname, email,password, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    values: [userName, firstName, lastName, email, password, role],
  };
  return connection.query(sql);
};
module.exports = { addUser };
