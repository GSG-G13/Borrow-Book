const Joi = require('joi');
const signupSchema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().required(),
    role: Joi.string().valid('admin', 'user'),

});

module.exports = { signupSchema }