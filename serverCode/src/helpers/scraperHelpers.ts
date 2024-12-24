import { Page } from "puppeteer";

// function to handle scraping process with diffrent configrations depend on the website we need to scrap
export async function websitesScraperConfigrations(
  website: string,
  page: Page
) {
  switch (website) {
    //scraper configration for mcommunity website
    case "mcommunity": {
      const selectElement = await page.$('label[name="page-size"] select');
      if (selectElement) await selectElement.click();
      await delay(2000);
      await page.select('label[name="page-size"] select', "500");
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      delay(2000);
      break;
    }
    //scraper configration for static websites and lazyloading websites
    default:
      await autoScroll(page);
  }
}

// a funtion with auto scroll while scraping a lazyLoading page and all pages without pageintion
export async function autoScroll(page: any) {
  const getDocumentHeight = async () => {
    return await page.evaluate(() => document.body.scrollHeight);
  };

  let previousHeight = await getDocumentHeight();
  let currentHeight;

  while (true) {
    // Scroll to the bottom of the page
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    // Wait for new content to load
    await delay(3000);
    currentHeight = await getDocumentHeight();
    // If the height of the document hasn't changed, break the loop
    if (currentHeight === previousHeight) {
      break;
    }
    previousHeight = currentHeight;
  }
}

// delay function for scraping
export async function delay(time: any) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}
