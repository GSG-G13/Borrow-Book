const Joi = require('joi');
const addBookSchema = Joi.object({
  author: Joi.string().min(3).max(30).required(),
  image: Joi.string().required(),
  bookName: Joi.string().required(),  
});

module.exports =  {addBookSchema } ;