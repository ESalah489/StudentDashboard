import Joi from "joi";

export const createQuizSchema = Joi.object({
  name: Joi.string().min(3).required(),
  subject: Joi.string().min(3).required(),
  discription: Joi.string().min(5).optional(),
  date: Joi.date().iso().required(),
  duration: Joi.number().min(1).required(),
  totalMarks: Joi.number().min(1).required(),
});

export const updateQuizSchema = Joi.object({
  name: Joi.string().min(3).optional(),
  subject: Joi.string().min(3).optional(),
  discription: Joi.string().min(5).optional(),
  date: Joi.date().iso().optional(),
  duration: Joi.number().min(1).optional(),
  totalMarks: Joi.number().min(1).optional(),
});
