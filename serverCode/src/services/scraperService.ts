import axios from "axios";
import cheerio from "cheerio";

const scraperService = {
  //basic Scraper until I get properly inormaitons
  async scrape(parameter: string): Promise<any> {
    const url = "https://www.skool.com/";
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      // Example: Extract data from HTML using cheerio
      const title = $("title").text();
      const metaDescription = $('meta[name="description"]').attr("content");

      return { title, metaDescription };
    } catch (error) {
      console.error("Error scraping:", error);
      throw new Error("Failed to scrape data");
    }
  },
};

export default scraperService;
