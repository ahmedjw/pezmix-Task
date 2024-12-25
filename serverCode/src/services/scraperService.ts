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
      const $ = cheerio.load(htmlContent);
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
      const textContent = $.html();
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
