const { verify } = require('jsonwebtoken');
const { borrowBookQuery } = require('../database/queries/borrowBookQuery')
const borrowBook = (req, res) => {
    const { id } = req.params;
    const token = req.cookies.token;
    console.log(token);
    verify(token, 'privateKey' , (err, decode) => {
        if(err) {
            res.status(401).json({ message: "Unauthorized" });
        }
        console.log(decode.id);
        console.log(id);
        borrowBookQuery(decode.id,id)
        .then(() => {
            res.json({
                massage : "you have borrow Book successfully"
            })
        })
        .catch((err) => {
            massage : err
        })
    })
}

  module.exports = {borrowBook}


