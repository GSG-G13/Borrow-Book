const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");

const router = require("express").Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/home/addBook", addBook);

module.exports = router;
