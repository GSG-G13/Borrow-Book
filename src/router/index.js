const path = require('path');

const { login } = require("../controllers/sginup/login");
const { signUp } = require("../controllers/sginup/sginup");
const { addBook } = require("../controllers/addBooks");
const { getBooks } = require('../controllers/getBooks');
const {logout} = require('../controllers/sginup/logout')
const {deleteBook} = require('../controllers/deleteBook');
const { verify } = require("jsonwebtoken");
const {borrowBook} = require('../controllers/borrowBook')
const router = require("express").Router();
const cookieParser = require("cookie-parser");
router.use(cookieParser());
const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/");
  }
  verify(token, "privateKey", (err) => {
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
router.delete('/deleteBook/:id', deleteBook);
router.post('/borrowBook/:id', borrowBook)



module.exports = router;