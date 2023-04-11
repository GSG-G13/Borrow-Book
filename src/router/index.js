<<<<<<< HEAD
const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
=======
const { getBooks } = require('../controllers/getBooks');
const { login } = require('../controllers/sginup/login');
const { signUp } = require('../controllers/sginup/sginup');

>>>>>>> main

const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/home/addBook", addBook);

<<<<<<< HEAD
module.exports = router;
=======

router.post("/signUp", signUp);
router.post('/login', login);
router.get('/getBooks',getBooks )

module.exports = router
>>>>>>> main
