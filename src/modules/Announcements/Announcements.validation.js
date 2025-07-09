import Joi from "joi";

export const createAnnouncementSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  content: Joi.string().min(5).max(1000).required(),
  isActive: Joi.boolean().optional(),
});

export const updateAnnouncementSchema = Joi.object({
  title: Joi.string().min(3).max(100).optional(),
  content: Joi.string().min(5).max(1000).optional(),
  isActive: Joi.boolean().optional(),
});
