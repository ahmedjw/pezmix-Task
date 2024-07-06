import cheerio from "cheerio";
import puppeteer from "puppeteer";
import { autoScroll, delay } from "../helpers/scraperHelpers";
import { websitesScraperConfigrations } from "../helpers/scraperHelpers";
import { storeEmails } from "../helpers/dbActions";
import { connectToDb } from "../db";

const scraperService = {
  async scrapeAndStore(url: string) {
    const emailsSet = new Set();
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 300000 });
      await delay(3000);
      if (url.includes("mcommunity"))
        websitesScraperConfigrations("mcommunity", page);
      else {
        await autoScroll(page);
      }

      await delay(2000);
      const htmlContent = await page.content();
      await delay(2000);
      // Load HTML content into Cheerio
      const $ = cheerio.load(htmlContent);
      //email regex to find emails
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      // Get all text content from the page
      const textContent = $.html();
      // Find all email addresses in the text content
      const emails = textContent.match(emailRegex);
      emails?.map((item: string) => emailsSet.add(item));
      await connectToDb();
      const emailsScraped = await storeEmails(emailsSet);
      return { emailsScraped };
    } catch (error) {
      console.error("Error:", error);
    } finally {
      await browser.close();
    }
  },
};

export default scraperService;
