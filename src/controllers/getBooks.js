const { getBooksFormDatabase } = require("../database/queries/getBooks")

const getBooks = (req, res) => {
    getBooksFormDatabase()
    .then(({rows}) => {
        res.json({rows})
    })
    .catch(() => {
        res.json({
            status : 500,
            massage : "Error from database"
        })
    })
}
module.exports = {getBooks}