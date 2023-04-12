const { compare } = require("bcrypt");
const { getUserByEmail } = require("../../database/queries/getEmail");
const { loginSchema } = require('../../utiles/validation/loginSchema');
const { signToken } = require('../../utiles/functions/sginToken');


const login = (req, res, next) => {
    const { body: { password, email } } = req;
    loginSchema.validateAsync(req.body)
        .then(getUserByEmail)
        .then(({ rows }) => {
            if (rows.length) {
                return compare(password, rows[0].password);
            }
            else {
                res.status(401).json({ message: "Please create account first!" })
            }
        })
        .then((isMatch) => {
            if (!isMatch) res.status(401).json({ message: "Please enter correct password!" });
            return signToken(email)
        })
        .then(token => {
            res.cookie("token", token).redirect("/main")
        })
        .catch((error) => {
            res.json({
                status: 404,
                massage: error
            })
        })

}
module.exports = { login }