import { Dispatch, SetStateAction } from "react";

export interface ScrapeResoursesComponentI {
  name: string;
  image: string;
  link: string;
  setScrapingWebsite: Dispatch<SetStateAction<string>>;
  parameterName: string;
}
