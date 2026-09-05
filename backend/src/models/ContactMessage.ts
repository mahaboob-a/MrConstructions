import { Schema, model, Document } from "mongoose";

export interface IContactMessage extends Document {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange?: string;
  message: string;
  status: "new" | "contacted" | "closed";
  createdAt: Date;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    projectType: { type: String, required: true },
    budgetRange: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ["new", "contacted", "closed"], default: "new" },
  },
  { timestamps: true }
);

export default model<IContactMessage>("ContactMessage", ContactMessageSchema);
