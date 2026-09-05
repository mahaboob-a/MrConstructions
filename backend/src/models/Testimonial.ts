import { Schema, model, Document } from "mongoose";

export interface ITestimonial extends Document {
  customerName: string;
  project: string;
  review: string;
  rating: number;
  approved: boolean;
}

const TestimonialSchema = new Schema<ITestimonial>(
  {
    customerName: { type: String, required: true },
    project: { type: String, required: true },
    review: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default model<ITestimonial>("Testimonial", TestimonialSchema);
