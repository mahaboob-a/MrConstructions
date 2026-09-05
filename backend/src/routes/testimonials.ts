import { Router } from "express";
import Testimonial from "../models/Testimonial";
import { requireAuth, requireRole } from "../middleware/auth";

const router = Router();

// GET /api/testimonials  - only approved, public
router.get("/", async (req, res, next) => {
  try {
    const items = await Testimonial.find({ approved: true }).sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// POST /api/testimonials  - public submission, requires admin approval before showing
router.post("/", async (req, res, next) => {
  try {
    const { customerName, project, review, rating } = req.body;
    const doc = await Testimonial.create({ customerName, project, review, rating, approved: false });
    res.status(201).json({ success: true, id: doc._id });
  } catch (err) {
    next(err);
  }
});

// PUT /api/testimonials/:id/approve  (admin only)
router.put("/:id/approve", requireAuth, requireRole("admin"), async (req, res, next) => {
  try {
    const doc = await Testimonial.findByIdAndUpdate(req.params.id, { approved: true }, { new: true });
    if (!doc) return res.status(404).json({ error: "Testimonial not found" });
    res.json(doc);
  } catch (err) {
    next(err);
  }
});

export default router;
