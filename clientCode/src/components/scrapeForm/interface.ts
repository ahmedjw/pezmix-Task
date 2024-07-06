import { Dispatch, SetStateAction } from "react";
import { ScrapeResoursesComponentI } from "../ScrapeResoursesComponent/interface";
import { CategoryT } from "../../interfaces";

export type FieldType = {
  category?: string;
  parameter?: string;
  name?: string;
};
export interface ScrapeFormI {
  setCategory: Dispatch<SetStateAction<CategoryT>>;
  scrapeResources: Array<ScrapeResoursesComponentI>;
}
export interface resource {
  name: string;
  image: string;
  link: string;
}
