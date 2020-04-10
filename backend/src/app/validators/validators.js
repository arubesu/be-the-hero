import { Joi } from 'celebrate';

const ngoCreateValidator = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.number().required(),
  city: Joi.string().required(),
  state: Joi.string().length(2),
  password: Joi.string().required()
});

const profileIndexValidator = Joi.object({
  authorization: Joi.string().required()
}).unknown();

const sessionValidator = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export {
  ngoCreateValidator,
  profileIndexValidator,
  sessionValidator
}