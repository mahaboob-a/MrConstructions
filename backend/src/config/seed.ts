import dotenv from "dotenv";
import { connectDB } from "./db";
import Project from "../models/Project";
import Testimonial from "../models/Testimonial";

dotenv.config();

const projects = [
  {
    name: "Green Valley Residence",
    category: "Residential",
    location: "Nandyala",
    year: 2024,
    description: "A modern family home combining open-plan living with durable, low-maintenance finishes.",
    images: [],
    featured: true,
  },
  {
    name: "Metro Business Center",
    category: "Commercial",
    location: "Kurnool",
    year: 2024,
    description: "A multi-tenant commercial building delivered on schedule with full civil and MEP coordination.",
    images: [],
    featured: true,
  },
  {
    name: "Urban Renewal Project",
    category: "Renovation",
    location: "Nandyala",
    year: 2023,
    description: "Structural and interior renovation of an existing property to modern standards.",
    images: [],
    featured: false,
  },
];

const testimonials = [
  {
    customerName: "Sample Client",
    project: "Green Valley Residence",
    review: "MR Constructions delivered exactly what was promised, on time and on budget.",
    rating: 5,
    approved: true,
  },
];

async function run() {
  await connectDB();
  await Project.deleteMany({});
  await Testimonial.deleteMany({});
  await Project.insertMany(projects);
  await Testimonial.insertMany(testimonials);
  console.log("[seed] Sample data inserted");
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
