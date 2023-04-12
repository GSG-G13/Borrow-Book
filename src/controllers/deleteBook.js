const  {deleteBookQuery}  = require('../database/queries/deleteBookQuery');


const deleteBook = (req, res) => {
    const { id } = req.params
    deleteBookQuery(id)
    .then(data => res.status(200).send(data.rows))
};

module.exports = {deleteBook};