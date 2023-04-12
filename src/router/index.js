const path = require('path');

const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
const { getBooks } = require('../controllers/getBooks');
const {logout} = require('../controllers/sginup/logout')
const { verify } = require("jsonwebtoken");



const router = require("express").Router();

const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authenticateUser = (req, res, next) => {
  const token = req.cookies.tokenn;
  if (!token) {
    return res.redirect("/");
  }
  verify(token, "privateKey", (err, token_) => {
    if (err) {
      return res.redirect("/");
    }
    next();
  });
};

router.post("/signup", signUp);
router.post('/login', login);
router.get('/logout', logout);
router.get("/getBooks", authenticateUser, getBooks);
router.post("/addBook", authenticateUser, addBook);
router.get("/main", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "..", "public", "pages", "books.html"));
});

router.get('logout', logout);


module.exports = router;