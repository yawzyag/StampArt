// val
const Joi = require('@hapi/joi');
// register val
const registerVal = async data => {
  // validation
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .required(),
    direction: Joi.string()
      .min(5)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
      .error(new Error('Email is a required field!'))
      .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/)
  });
  const val = await schema.validateAsync(data);
  return val;
};

const loginVal = async data => {
  // validation
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
      .pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/)
  });
  const val = await schema.validateAsync(data);
  return val;
};

module.exports.registerVal = registerVal;
module.exports.loginVal = loginVal;
