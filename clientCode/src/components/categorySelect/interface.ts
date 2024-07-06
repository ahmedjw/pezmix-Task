import { Dispatch, SetStateAction } from "react";
import { CategoryT } from "../../interfaces";

export interface CateorySelectI {
  setCategory: Dispatch<SetStateAction<CategoryT>>;
}
