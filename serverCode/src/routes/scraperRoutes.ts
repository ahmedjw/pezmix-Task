import express, { Request, Response } from "express";
import scraperController from "../controllers/scraperController";

export const router = express.Router();

// Define routes for scraping
router.get("/scrape", (req: Request, res: Response) => {
  scraperController.scrapeData(req, res);
});
router.post("/scrape", (req: Request, res: Response) => {
  scraperController.scrapeData(req, res);
});

export default router;
