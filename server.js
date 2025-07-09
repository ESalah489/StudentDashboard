import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { errorHandler } from "./src/middleware/errorHandllingMiddleware.js";
import db_connection from "./DB/DB-connection.js";
import quizzes from "./src/modules/Quizzes/Quizzes.route.js";
import announcements from "./src/modules/Announcements/Announcements.route.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
/* --------------------------- Connect to MongoDB --------------------------- */
db_connection();
/* --------------------------------- Routes --------------------------------- */
app.use("/api/quizzes",quizzes)
app.use("/api/announcements",announcements)
/* ------------------------ Error Handling from middleWare  ----------------------- */
app.use(errorHandler);
/* ----------------------------- Ports and Hosts ---------------------------- */
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "127.0.0.1";
app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
