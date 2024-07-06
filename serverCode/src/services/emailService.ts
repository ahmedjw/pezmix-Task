import nodemailer from "nodemailer";
require("dotenv").config();
import { EmailExample } from "../helpers/Emailsetup";

const emailService = {
  emailBody: {
    subject: "Transform Your Digital Creations into Income with Pezmix",
    body: EmailExample.body,
    html: EmailExample.html,
  },

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      //I made here a test Email with a static Email with the option to make it dynmic if we use a dashboard to create & send email
      const transporter = nodemailer.createTransport({
        //test using outlook service need to change to comapny's host
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.COMPANY_EMAIL, // need to check .env data
          pass: process.env.COMPANY_COMPANY_EMAIL_PASSWORD,
        },
        headers: {
          //used to improve reaching mail to main box
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
        to: "ahmedjwifel@gmail.com",
        subject: this.emailBody.subject,
        text: this.emailBody.body,
        html: this.emailBody.html,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  },
};

export default emailService;
