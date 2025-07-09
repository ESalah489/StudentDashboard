import Announcement from "../../../DB/models/Announcement.model.js";

/* --------------------------- Create Announcement ------------------------- */
export const createAnnouncement = async (req, res, next) => {
  try {
    const { title, content, isActive = true } = req.body;

    const newAnnouncement = new Announcement({
      title,
      content,
      isActive,
    });

    await newAnnouncement.save();

    res.status(201).json({
      message: "Announcement created successfully",
      announcement: newAnnouncement,
    });
  } catch (err) {
    next(err);
  }
};

/* -------------------------- Get All Announcements ------------------------- */
export const getAllAnnouncements = async (req, res, next) => {
  try {
    const announcements = await Announcement.find();
    res.status(200).json({ announcements });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Get Announcement by ID ----------------------- */
export const getAnnouncementById = async (req, res, next) => {
  try {
    const announcementId = req.params.id;
    const announcement = await Announcement.findById(announcementId);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json({ announcement });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Update Announcement by ID ----------------------- */
export const updateAnnouncementById = async (req, res, next) => {
  try {
    const announcementId = req.params.id;
    const announcement = await Announcement.findById(announcementId);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    const { title, content, isActive } = req.body;

    announcement.title = title;
    announcement.content = content;
    announcement.isActive = isActive;

    await announcement.save();

    res
      .status(200)
      .json({ message: "Announcement updated successfully", announcement });
  } catch (err) {
    next(err);
  }
};

/* ---------------------- Delete Announcement By ID ----------------------- */
export const deleteAnnouncementById = async (req, res, next) => {
  try {
    const announcementId = req.params.id;
    const announcement = await Announcement.findById(announcementId);

    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    await Announcement.findByIdAndDelete(announcementId);

    res
      .status(200)
      .json({ message: "Announcement deleted successfully", announcement });
  } catch (err) {
    next(err);
  }
};
