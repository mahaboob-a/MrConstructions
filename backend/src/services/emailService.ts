import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const emailUser = process.env.EMAIL_USER;
const emailPassword = process.env.EMAIL_APP_PASSWORD;
const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

console.log("EMAIL_USER:", emailUser);
console.log("EMAIL_APP_PASSWORD exists:", !!emailPassword);
console.log("CONTACT_NOTIFY_EMAIL:", notifyEmail);

if (!emailUser || !emailPassword || !notifyEmail) {
  console.error("❌ Email configuration is missing in .env");
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailUser,
    pass: emailPassword,
  },
});

export async function sendQuoteEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  budgetRange?: string;
  message: string;
}) {
  await transporter.sendMail({
    from: `"MR Constructions Website" <${emailUser}>`,
    to: notifyEmail,
    replyTo: data.email,

    subject: `New Quote Request - ${data.fullName}`,

    html: `
      <h2>New Quote Request - MR Constructions</h2>

      <p><strong>Full Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Project Type:</strong> ${data.projectType}</p>

      <p>
        <strong>Budget Range:</strong>
        ${data.budgetRange || "Not specified"}
      </p>

      <h3>Project Description</h3>
      <p>${data.message}</p>

      <hr>

      <p>
        This request was submitted from the MR Constructions website.
      </p>
    `,
  });
}