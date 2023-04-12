const { compare } = require("bcrypt");
const { getUserByEmail } = require("../../database/queries/getEmail");
const { loginSchema } = require('../../utiles/validation/loginSchema');
const { signToken } = require('../../utiles/functions/sginToken');

const customError = (status, massage) => {
    const error = new Error(massage);
    error.status = status;
    return error;
}

const login = (req, res, next) => {
    const { body: { password, email ,username} } = req;
    loginSchema.validateAsync(req.body)
        .then(getUserByEmail)
        .then(({ rows }) => {
            if (rows.length) {
                req.userID = rows[0].id
                return compare(password, rows[0].password);
            }
            else {
                throw customError(401, { message: "Please create account first!"})
            }
        })
        .then((isMatch) => {
            if (!isMatch) throw customError(401,{ message: "Please enter correct password!" }) 
            return signToken(email,req.userID,username)
        })
        .then(token => {
            return res.cookie("token", token).redirect("/main");
        })
        .catch((error) => {
            res.json({
                status: error.status,
                massage: error.massage
            })
        })

}
module.exports = { login }