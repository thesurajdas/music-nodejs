import { celebrate, Joi } from 'celebrate';

export const updateMusic = celebrate({
  body: Joi.object({
    name: Joi.string().trim(),
    artist: Joi.string().required().trim(),
    genre: Joi.string().required().trim(),
    mood: Joi.string().required().trim(),
  }),
});
