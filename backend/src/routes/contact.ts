import { Router } from "express";
import { body, validationResult } from "express-validator";
import ContactMessage from "../models/ContactMessage";

const router = Router();

// POST /api/contact  - public lead / quote request form
router.post(
  "/",
  body("fullName").isString().trim().notEmpty(),
  body("email").isEmail(),
  body("phone").isString().trim().isLength({ min: 7 }),
  body("projectType").isString().notEmpty(),
  body("message").isString().trim().isLength({ min: 5 }),
  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

      const { fullName, email, phone, projectType, budgetRange, message } = req.body;
      const doc = await ContactMessage.create({
        fullName,
        email,
        phone,
        projectType,
        budgetRange,
        message,
      });

      // Hook point: send email/WhatsApp notification here (e.g. Nodemailer, Twilio)
      res.status(201).json({ success: true, id: doc._id });
    } catch (err) {
      next(err);
    }
  }
);

export default router;
