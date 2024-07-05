import { Request, Response } from "express";
import scraperService from "../services/scraperService";

const scraperController = {
  async scrapeData(req: Request, res: Response) {
    try {
      // Call scraper service method
      const scrapedData = await scraperService.scrapeAndStore(req.body.url);
      res.status(200).json(scrapedData);
    } catch (error) {
      console.error("Error scraping data:", error);
      res.status(500).json({ message: "Failed to scrape data" });
    }
  },
};

export default scraperController;
