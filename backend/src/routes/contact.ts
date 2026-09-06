import { Router } from "express";
import { body, validationResult } from "express-validator";
import ContactMessage from "../models/ContactMessage";
import { sendQuoteEmail } from "../services/emailService";

const router = Router();

// POST /api/contact
router.post(
  "/",

  body("fullName")
    .isString()
    .trim()
    .notEmpty(),

  body("email")
    .isEmail(),

  body("phone")
    .isString()
    .trim()
    .isLength({ min: 7 }),

  body("projectType")
    .isString()
    .notEmpty(),

  body("message")
    .isString()
    .trim()
    .isLength({ min: 5 }),

  async (req, res, next) => {
    try {
      // Validate form data
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const {
        fullName,
        email,
        phone,
        projectType,
        budgetRange,
        message,
      } = req.body;

      // Save quote request to MongoDB
      const doc = await ContactMessage.create({
        fullName,
        email,
        phone,
        projectType,
        budgetRange,
        message,
      });

      console.log(`[contact] Quote saved: ${doc._id}`);

      // Send email notification
      try {
        await sendQuoteEmail({
          fullName,
          email,
          phone,
          projectType,
          budgetRange,
          message,
        });

        console.log(
          `[contact] Email sent to ${process.env.CONTACT_NOTIFY_EMAIL}`
        );
      } catch (emailError) {
        console.error(
          "[contact] Email sending failed:",
          emailError
        );
      }

      // Send success response to frontend
      return res.status(201).json({
        success: true,
        id: doc._id,
        message: "Request received successfully",
      });

    } catch (err) {
      next(err);
    }
  }
);

export default router;