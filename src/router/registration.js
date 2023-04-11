const router = require('express').Router();
const { login, signup, logout } = require('../controllers');
console.log('hello');
router.post('/signup', signup);

//router.post('/login', login);
//router.get('/logout', logout);

module.exports = router;