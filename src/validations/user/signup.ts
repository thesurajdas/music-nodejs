import { celebrate, Joi } from 'celebrate';

export const userSignup = celebrate({
  body: Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().lowercase(),
    password: Joi.string()
      .required()
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/),
      preferences: Joi.object({
        genres: Joi.string().optional(),
        moods: Joi.string().optional(),
      })
  }),
});
