const path = require('path');

const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
const { getBooks } = require('../controllers/getBooks');
const { logout } = require('../controllers/sginup/logout')

const router = require("express").Router();

router.post("/signup", signUp);
router.post('/login', login);
router.get('/getBooks', getBooks);
router.post("/addBook", addBook);
router.get('/logout', logout);
router.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "pages", "books.html"));
});
// router.get('/logout',(req, res) => {
//     res.json({
//         massage : "Hello"
//     })
// })


module.exports = router;