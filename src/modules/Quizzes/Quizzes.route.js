import express from "express";
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  updateQuizById,
  deleteQuizById,
} from "../Quizzes/Quizzes.controller.js";

import { validate } from "../../middleware/validationMiddleware.js";
import {
  createQuizSchema,
  updateQuizSchema,
} from "../Quizzes/Quizzes.validation.js";

const router = express.Router();

router.post("/", validate(createQuizSchema), createQuiz);

router.get("/", getAllQuizzes);

router.get("/:id", getQuizById);

router.patch("/:id", validate(updateQuizSchema), updateQuizById);

router.delete("/:id", deleteQuizById);

export default router;
