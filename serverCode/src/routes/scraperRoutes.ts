import express, { Request, Response } from "express";
import scraperController from "../controllers/scraperController";

export const router = express.Router();

router.post("/Emails", (req: Request, res: Response) => {
  scraperController.scrapeData(req, res);
});

export default router;
