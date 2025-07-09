import express from "express";
import {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncementById,
  deleteAnnouncementById,
} from "../Announcements/Announcements.controller.js";
import { validate } from "../../middleware/validationMiddleware.js";
import {
  createAnnouncementSchema,
  updateAnnouncementSchema,
} from "./Announcements.validation.js";
const router = express.Router();
router.post("/", validate(createAnnouncementSchema), createAnnouncement);
router.get("/", getAllAnnouncements);
router.get("/:id", getAnnouncementById);
router.patch(
  "/:id",
  validate(updateAnnouncementSchema),
  updateAnnouncementById
);
router.delete("/:id", deleteAnnouncementById);
export default router;
