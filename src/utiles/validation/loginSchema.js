const Joi = require('joi');


const loginSchema = Joi.object({
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: Joi.string().required(),

});

module.exports = { loginSchema }