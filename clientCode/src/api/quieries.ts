import { axiosInstance } from "../utils/axios";

export const ScrapeEmails = async (url: URL) => {
  try {
    const response = await axiosInstance.post("scrape/Emails", {
      url: url,
    });
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
