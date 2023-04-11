const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        massage : "Hello"
    })
})

module.exports = router