import { Request, Response } from "express";
import emailService from "../services/emailService";

const EmailController = {
  async sendEmail(req: Request, res: Response) {
    try {
      const { to, subject, text } = req.body;
      await emailService.sendEmail(to, subject, text);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  },
};

export default EmailController;
