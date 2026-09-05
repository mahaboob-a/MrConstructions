import { Router } from "express";
import Project from "../models/Project";
import { requireAuth, requireRole } from "../middleware/auth";

const router = Router();

// GET /api/projects?category=Residential&page=1&limit=9
router.get("/", async (req, res, next) => {
  try {
    const { category, page = "1", limit = "9" } = req.query;
    const filter: Record<string, unknown> = {};
    if (category && category !== "All") filter.category = category;

    const pageNum = Math.max(parseInt(page as string, 10) || 1, 1);
    const limitNum = Math.min(parseInt(limit as string, 10) || 9, 50);

    const [items, total] = await Promise.all([
      Project.find(filter)
        .sort({ year: -1, createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),
      Project.countDocuments(filter),
    ]);

    res.json({ items, total, page: pageNum, pages: Math.ceil(total / limitNum) });
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:id
router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

// POST /api/projects  (admin only)
router.post("/", requireAuth, requireRole("admin"), async (req, res, next) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (err) {
    next(err);
  }
});

// PUT /api/projects/:id  (admin only)
router.put("/:id", requireAuth, requireRole("admin"), async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json(project);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/projects/:id  (admin only)
router.delete("/:id", requireAuth, requireRole("admin"), async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ error: "Project not found" });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
});

export default router;
