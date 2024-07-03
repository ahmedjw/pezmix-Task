import express, { Request, Response } from "express";
import EmailController from "../controllers/emailController";

const router = express.Router();
// Define routes for sending emails
router.post("/send", (req: Request, res: Response) => {
  EmailController.sendEmail(req, res);
});

export default router;
