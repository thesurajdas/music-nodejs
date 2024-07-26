// create celebrate with joi validation for craete Music fields name, description, creater

import { celebrate, Joi } from 'celebrate';

export const createMusic = celebrate({
  body: Joi.object({
    title: Joi.string().required().trim(),
    artist: Joi.string().required().trim(),
    genre: Joi.string().required().trim(),
    mood: Joi.string().required().trim(),
  }),
});