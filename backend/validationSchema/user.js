import Joi from "joi";


export const create = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required(),
  contact: Joi.string().required(),
  path: Joi.string(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  otp: Joi.string().required(),
});



export const login = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});