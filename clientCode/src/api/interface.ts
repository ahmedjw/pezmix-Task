export interface EmailScrapPostData {
  data: {
    emails: Array<string>;
  };
  status: number;
}
export interface EmailRequirmentsI {
  to: string;
  object: string;
  body: string;
}
