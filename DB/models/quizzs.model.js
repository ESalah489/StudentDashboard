import mongoose, { Schema } from "mongoose";

const QuizzesSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    subject: { type: String, required: true, trim: true, lowercase: true },
    discription: { type: String, required: true, trim: true, lowercase: true },
    date: { type: Date, required: true, trim: true },
    duration: { type: Number, required: false, trim: true },
    totalMarks: { type: Number, required: false, trim: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Quizzes = mongoose.Schema("Quizzes", QuizzesSchema);
export default Quizzes;
