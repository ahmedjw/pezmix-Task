import { axiosInstance } from "../utils/axios";
import { EmailRequirmentsI } from "./interface";

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

export const SendEmail = async ({ to, object, body }: EmailRequirmentsI) => {
  try {
    const response = await axiosInstance.post("/email/send", {
      to: to,
      subject: object,
      text: body,
    });

    return response;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};
