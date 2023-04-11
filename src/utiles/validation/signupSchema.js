const Joi = require('joi');

const signupSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    picture: Joi.string().required(),
    role: Joi.string().valid('admin', 'user').required(),

});

module.exports = { signupSchema }