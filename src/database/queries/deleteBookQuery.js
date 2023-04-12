const connection = require('../config/connection')
const deleteBookQuery = (id) => {
   return connection.query(`DELETE FROM books WHERE id = $1 RETURNING *; `,[id]);
}
module.exports = {deleteBookQuery}