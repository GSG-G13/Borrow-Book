const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
const { getBooks } = require('../controllers/getBooks');
const {logout} = require('../controllers/sginup/logout')


const router = require("express").Router();

router.post("/signup", signUp);
router.post('/login', login);
router.get('/getBooks',getBooks);
router.post("/addBook", addBook);
router.get('logout', logout);

module.exports = router
