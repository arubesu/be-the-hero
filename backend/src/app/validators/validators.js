const { Joi } = require('celebrate');

const ngoCreateValidator = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.number().required(),
  city: Joi.string().required(),
  uf: Joi.string().length(2)
});

const profileIndexValidator = Joi.object({
  authorization: Joi.string().required()
}).unknown();

module.exports = {
  ngoCreateValidator,
  profileIndexValidator,
}