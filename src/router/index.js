const { login } = require('../controllers/sginup/login')
const { signUp } = require('../controllers/sginup/sginup')


const router = require('express').Router()


router.post("/signUp", signUp)
router.post('/login', login)

module.exports = router