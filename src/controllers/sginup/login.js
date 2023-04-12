const { compare } = require("bcrypt");
const { getUserByEmail } = require("../../database/queries/getEmail");
const { loginSchema } = require('../../utiles/validation/loginSchema');
const { signToken } = require('../../utiles/functions/sginToken');
const { customError } = require('./handelError')


const login = (req, res, next) => {
    const {body:{ password} } = req;
    loginSchema.validateAsync(req.body)
    .then(getUserByEmail)
    .then(({rows}) => {
        req.user = rows[0]
    })
    .then(() => {
        return signToken(req.user.email)
    })
    .then((token) => {
        req.cookie = token
    })
    .then(() =>{
    return compare(password, req.user.password)
}) 
    .then((result) => {
        if(!result) customError('The password is wrong',400)
        res.cookie('test',req.cookie)
        res.json({
            status: 200,
            massage : "the user has right  credential",
            user : req.user
        })
    })
    .catch((error) => {
        next(error)
    })

}

module.exports = { login }