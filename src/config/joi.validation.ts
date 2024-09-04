import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  NODE_ENV: Joi.string().default('dev'),
  MONGO_DB_URI: Joi.required(),
  PORT: Joi.number().default(3003),
  DEFAULT_LIMIT: Joi.number().default(5),
});
