const { compare } = require("bcrypt");
const { getUserByEmail } = require("../../database/queries/getEmail");
const { signupSchema } = require('../../utiles/validation/signupSchema');
const { signToken } = require('../../utiles/functions/sginToken')


const login = (req, res, next) => {
    const {body:{ password} } = req;
    signupSchema.validateAsync(req.body)
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
        if(!result) throw Error('The password is wrong')
        res.cookie('test',req.cookie)
        res.json({
            status: 200,
            massage : "the user has right  credential",
            user : req.user
        })
    })
    .catch((error) => {
        res.json({
            status: 404,
            massage : error
        })
    })

}

module.exports = { login }