import { Schema, model, Document } from "mongoose";

export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Industrial"
  | "Renovation"
  | "Civil"
  | "Other";

export interface IProject extends Document {
  name: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  images: string[];
  featured: boolean;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true, trim: true },
    category: {
      type: String,
      enum: ["Residential", "Commercial", "Industrial", "Renovation", "Civil", "Other"],
      required: true,
    },
    location: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    images: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

ProjectSchema.index({ category: 1, year: -1 });

export default model<IProject>("Project", ProjectSchema);
