import axios from "axios";
import cheerio from "cheerio";
import puppeteer from "puppeteer";

const scraperService = {
  //basic Scraper until I get properly inormaitons
  async scrape(parameter: string): Promise<any> {
    const url = "https://stanfordwho.stanford.edu/people";

    try {
      const { data: content } = await axios.get(url);

      // Load the content into Cheerio
      const $ = cheerio.load(content);

      // Define the regex for finding email addresses
      const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;

      // Get all text content from the page
      const textContent = $.html();

      // Find all email addresses in the text content
      const emails = textContent.match(emailRegex);
      const emailsSet = new Set(emails);
      console.log(emailsSet);

      return { emailsSet, emails };
    } catch (error) {
      console.error("Error scraping:", error);
      throw new Error("Failed to scrape data");
    }
  },
  async autoScroll(page: any) {
    await page.evaluate(async () => {
      await new Promise((resolve: any) => {
        let totalHeight = 0;
        const distance = 100;
        const delay = 100;

        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, delay);
      });
    });
  },
  async scrollUntilEnd(url: any) {
    const browser = await puppeteer.launch({
      headless: false, // Launch browser in non-headless mode
      // Slow down Puppeteer operations by 100ms to see them better
    });
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: "networkidle2" });

      // Scroll until the end of the page
      await scraperService.autoScroll(page);

      setTimeout(() => scraperService.scrape(""), 20000);

      // Optionally, you can do further processing here
      console.log("Finished scrolling to end of the page.");

      // Example: Capture a screenshot
      await page.screenshot({ path: "page-screenshot.png" });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      await browser.close();
    }
  },
};
scraperService.scrollUntilEnd("https://stanfordwho.stanford.edu/people");
export default scraperService;
