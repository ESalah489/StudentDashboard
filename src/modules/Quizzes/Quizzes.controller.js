import Quizzes from "../../../DB/models/quizzs.model.js";

/* --------------------------- Create Quiz ------------------------- */
export const createQuiz = async (req, res, next) => {
  try {
    const { name, subject, discription, date, duration, totalMarks } = req.body;

    const newQuiz = new Quizzes({
      name,
      subject,
      discription,
      date,
      duration,
      totalMarks,
    });

    await newQuiz.save();

    res.status(201).json({
      message: "Quiz created successfully",
      quiz: newQuiz,
    });
  } catch (err) {
    next(err);
  }
};

/* -------------------------- Get All Quizzes ------------------------- */
export const getAllQuizzes = async (req, res, next) => {
  try {
    const quizzes = await Quizzes.find();
    res.status(200).json({ quizzes });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Get Quiz by ID ----------------------- */
export const getQuizById = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quizzes.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ quiz });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Update Quiz by ID ----------------------- */
export const updateQuizById = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const { name, subject, discription, date, duration, totalMarks } = req.body;

    const quiz = await Quizzes.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    quiz.name = name;
    quiz.subject = subject;
    quiz.discription = discription;
    quiz.date = date;
    quiz.duration = duration;
    quiz.totalMarks = totalMarks;

    await quiz.save();

    res.status(200).json({ message: "Quiz updated successfully", quiz });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Delete Quiz by ID ----------------------- */
export const deleteQuizById = async (req, res, next) => {
  try {
    const quizId = req.params.id;
    const quiz = await Quizzes.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    await Quizzes.findByIdAndDelete(quizId);

    res.status(200).json({ message: "Quiz deleted successfully", quiz });
  } catch (err) {
    next(err);
  }
};
