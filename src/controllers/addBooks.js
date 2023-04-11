const { addBookSchema } = require("../utiles/validation/addBookSchema");
const { addBookQuery } = require("../database/queries/addBook");

const addBook = (req, res) => {
  console.log(req.body  );
  const { error, value } = addBookSchema.validate(req.body);
  if (error) {
    res.status(400).send({ error: error.details[0].message });
  } else {
    console.log(value);
    addBookQuery(value);
    res.status(200).send({ message: "Book added successfully" });
  }
};

module.exports = { addBook };
