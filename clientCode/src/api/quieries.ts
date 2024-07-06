import { axiosInstance } from "../utils/axios";

export const ScrapeEmails = async (url: any) => {
  try {
    const response = await axiosInstance.post("scrape/Emails", {
      url: url,
    });
    console.log("Response:", response);
    return response;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
