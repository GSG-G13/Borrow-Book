const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
const { getBooks } = require('../controllers/getBooks');


const router = require("express").Router();

router.post("/signUp", signUp);
router.post('/login', login);
router.get('/getBooks',getBooks )
router.post("/addBook", addBook);

module.exports = router
