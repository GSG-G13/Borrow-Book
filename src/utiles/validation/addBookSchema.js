const Joi = require('joi');

const addBookSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  image: Joi.string().required(),
  author: Joi.string().required(),  
});

module.exports = addBookSchema ;