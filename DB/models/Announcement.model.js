import mongoose, { Schema } from "mongoose";

const AnnoucementsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Annoucements = mongoose.model("Annoucements", AnnoucementsSchema);
export default Annoucements;
