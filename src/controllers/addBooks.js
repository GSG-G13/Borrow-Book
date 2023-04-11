const { addBookSchema } = require("../utiles/validation/addBookSchema");
const { addBookQuery } = require("../database/queries/addBook");

const addBook = (req, res) => {
  const {body: { author, image , bookName}} = req;
  addBookSchema.validateAsync({ author, image , bookName})
  .then((rows) => {
    console.log(rows);
    addBookQuery(author, image , bookName );
    res.status(200).send({ message: "Book added successfully" });  })
  .catch((error) => {
    console.log(error)
    res.json({
      massage : error
    })
  })

};

module.exports = { addBook };
