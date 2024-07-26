import { celebrate, Joi } from 'celebrate';

export const updateMusic = celebrate({
  body: Joi.object({
    title: Joi.string().trim(),
    artist: Joi.string().trim(),
    genre: Joi.string().trim(),
    mood: Joi.string().trim(),
  }),
});
