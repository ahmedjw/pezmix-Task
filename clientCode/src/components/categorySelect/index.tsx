import React from "react";
import { Select } from "antd";

interface CateorySelectI {
  setCategory: any;
}
const CateorySelect: React.FC<CateorySelectI> = ({ setCategory }) => {
  const handleOnChange = (e: any) => {
    setCategory(e);
  };
  return (
    <Select
      showSearch
      placeholder="Select a Category"
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
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
