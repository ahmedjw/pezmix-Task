import nodemailer from "nodemailer";
require("dotenv").config();

const emailService = {
  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.COMPANY_EMAIL,
          pass: process.env.COMPANY_COMPANY_EMAIL_PASSWORD,
        },
        headers: {
          "X-Sender-IP": "http://172.19.176.1:3000",
          "X-Mailer": "Nodemailer",
          "X-Originating-IP": "http://172.19.176.1:3000",
          "X-SPF-Result": "Pass",
          "X-DKIM-Result": "Pass",
          "X-MSFBL": "pezmix.com",
        },
      });

      await transporter.sendMail({
        from: "ahm_ed_2012@hotmail.com",
        to: to,
        subject: subject,
        text: text,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  },
};

export default emailService;
