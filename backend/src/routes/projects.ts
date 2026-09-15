import { Router } from "express";
import Project from "../models/Project";
import { requireAuth, requireRole } from "../middleware/auth";
import upload from "../middleware/upload";
import cloudinary from "../config/cloudinary";

const router = Router();

// GET /api/projects?category=Residential&page=1&limit=9
router.get("/", async (req, res, next) => {
  try {
    const { category, page = "1", limit = "9" } = req.query;

    const filter: Record<string, unknown> = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    const pageNum = Math.max(
      parseInt(page as string, 10) || 1,
      1
    );

    const limitNum = Math.min(
      parseInt(limit as string, 10) || 9,
      50
    );

    const [items, total] = await Promise.all([
      Project.find(filter)
        .sort({ year: -1, createdAt: -1 })
        .skip((pageNum - 1) * limitNum)
        .limit(limitNum),

      Project.countDocuments(filter),
    ]);

    res.json({
      items,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:id
router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        error: "Project not found",
      });
    }

    res.json(project);
  } catch (err) {
    next(err);
  }
});

// POST /api/projects
// Admin only
router.post(
  "/",
  requireAuth,
  requireRole("admin"),
  async (req, res, next) => {
    try {
      const project = await Project.create(req.body);

      res.status(201).json(project);
    } catch (err) {
      next(err);
    }
  }
);

// PUT /api/projects/:id
// Admin only
router.put(
  "/:id",
  requireAuth,
  requireRole("admin"),
  async (req, res, next) => {
    try {
      const project = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

      if (!project) {
        return res.status(404).json({
          error: "Project not found",
        });
      }

      res.json(project);
    } catch (err) {
      next(err);
    }
  }
);

// POST /api/projects/upload
// Upload images to Cloudinary
router.post(
  "/upload",
  requireAuth,
  requireRole("admin"),
  upload.array("images", 10),
  async (req, res, next) => {
    try {
      const files = req.files as Express.Multer.File[];

      if (!files || files.length === 0) {
        return res.status(400).json({
          error: "No images selected",
        });
      }

      const uploadedImages = await Promise.all(
        files.map(
          (file) =>
            new Promise<{
              url: string;
              publicId: string;
            }>((resolve, reject) => {
              const stream = cloudinary.uploader.upload_stream(
                {
                  folder: "mr-constructions/projects",
                  resource_type: "image",
                },
                (error, result) => {
                  if (error || !result) {
                    reject(
                      error ||
                        new Error("Cloudinary upload failed")
                    );
                    return;
                  }

                  resolve({
                    url: result.secure_url,
                    publicId: result.public_id,
                  });
                }
              );

              stream.end(file.buffer);
            }
          )
        )
      );

      res.status(201).json({
        success: true,
        images: uploadedImages,
      });
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/projects/:id
// Admin only
router.delete(
  "/:id",
  requireAuth,
  requireRole("admin"),
  async (req, res, next) => {
    try {
      const project = await Project.findByIdAndDelete(
        req.params.id
      );

      if (!project) {
        return res.status(404).json({
          error: "Project not found",
        });
      }

      res.json({
        success: true,
      });
    } catch (err) {
      next(err);
    }
  }
);

export default router;