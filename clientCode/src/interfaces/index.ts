export interface IEmail {
  category: string;
  date?: string;
  id?: number;
}
export interface storedScrapeResource {
  name: string;
  image: string;
  link: string;
  parameterName: "keyword" | "value";
}

export interface storedScrapeResourcesI {
  Podcasts: Array<storedScrapeResource>;
  Sororities: Array<storedScrapeResource>;
  Skool: Array<storedScrapeResource>;
}
export type CategoryT = "Sororities" | "Podcasts" | "Skool" | "";
