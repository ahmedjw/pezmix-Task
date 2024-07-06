import { Select } from "antd";
import { CateorySelectI } from "./interface";
import { CategoryT } from "../../interfaces";

const CateorySelect: React.FC<CateorySelectI> = ({ setCategory }) => {
  const handleOnChange = (e: CategoryT) => {
    setCategory(e);
  };
  return (
    <Select
      showSearch
      placeholder="Select a Category"
      options={[
        { value: "Podcasts", label: "Podcasts" },
        { value: "Sororities", label: "Sororities" },
        { value: "Skool", label: "Skool Communities" },
      ]}
      onChange={handleOnChange}
    />
  );
};

export default CateorySelect;
