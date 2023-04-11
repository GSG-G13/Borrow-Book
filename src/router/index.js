const { getBooks } = require('../controllers/getBooks');
const { login } = require('../controllers/sginup/login');
const { signUp } = require('../controllers/sginup/sginup');



const router = require('express').Router()


router.post("/signUp", signUp);
router.post('/login', login);
router.get('/getBooks',getBooks )

module.exports = router