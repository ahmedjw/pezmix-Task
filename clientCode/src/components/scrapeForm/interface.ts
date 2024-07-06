import { CategoryT } from "../../interfaces";

export type FieldType = {
  category?: string;
  parameter?: string;
  name: any;
};
export interface ScrapeFormI {
  setCategory: any;
  scrapeResources: any;
}
export interface resource {
  name: string;
  image: string;
  link: string;
}
