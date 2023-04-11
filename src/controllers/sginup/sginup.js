const { hash } = require("bcrypt");
const { addUser } = require('../../database/queries');
const { getUserByEmail } = require("../../database/queries/getEmail");
const { signupSchema } = require('../../utiles/validation/signupSchema');
const { signToken } = require('../../utiles/functions/sginToken')
const signUp = (req, res, next) => {
    const {body:{userName, firstName, lastName, email, password, role} } = req;
    signupSchema.validateAsync(req.body)
    .then(getUserByEmail)
    .then(({rows}) => {
        console.log(rows)
        if(rows.length > 0) throw Error("The user is already exit")
        return hash(password, 10)
    })
    .then((password) => {
        return addUser({userName, firstName, lastName, email, password, role})
    })
    .then(({rows}) => {
        req.user = rows
        return signToken(rows[0].email)
    })
    .then((token) => {
        res.cookie('token', token);
           res.json({
            status: 201,
            massage : "the user has been created successfully",
            user : req.user
        })

    })

    .catch((error) => {
        console.log(error);
        res.json({
            status: 404,
            massage : error
        })
    })

}

module.exports = { signUp }