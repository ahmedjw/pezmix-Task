import { Request, Response } from "express";
import emailService from "../services/emailService";

const EmailController = {
  async sendEmail(req: Request, res: Response) {
    try {
      console.log("Emaail sending");
      //   const { to, subject, text } = req.body;
      //   await emailService.sendEmail(to, subject, text);
      await emailService.sendEmail("ahmedvander@gmial.com", "subject", "text");
      res.status(200).json({ message: "Email sent successfully" });
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  },
};

export default EmailController;
