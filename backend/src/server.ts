import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import { notFound, errorHandler } from "./middleware/errorHandler";

import authRoutes from "./routes/auth";
import projectRoutes from "./routes/projects";
import contactRoutes from "./routes/contact";
import testimonialRoutes from "./routes/testimonials";

dotenv.config();

const app = express();

app.use(helmet());
app.use(compression());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Rate limit the public contact form to prevent spam/abuse
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.get("/api/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/api/testimonials", testimonialRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(Number(PORT), "0.0.0.0", () => {
    console.log(
      `[server] MR Constructions API running on port ${PORT}`
    );
  });
});

export default app;
