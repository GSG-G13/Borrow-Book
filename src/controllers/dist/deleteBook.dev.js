"use strict";

var _require = require('../Database/queries'),
    deleteBookQuery = _require.deleteBookQuery;

var deleteBook = function deleteBook(req, res) {
  var id = req.params.id;
  deleteBookQuery(id).then(function (data) {
    return res.status(200).send(data.rows);
  });
};

module.exports = deleteBook;