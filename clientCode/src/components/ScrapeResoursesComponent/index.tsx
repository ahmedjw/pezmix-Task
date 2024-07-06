import React from "react";
import { ScrapWebsiteImageStyle } from "./style";

const ScrapeResoursesComponent: React.FC<any> = ({
  name,
  image,
  link,
  parameterName,
  setScrapingWebsite,
}) => {
  const handleClick = () => {
    setScrapingWebsite({
      name,
      image,
      link,
      setScrapingWebsite,
      parameterName,
    });
  };
  return (
    <li
      key={name}
      style={ScrapWebsiteImageStyle}
      value={link}
      onClick={handleClick}
    >
      <img src={image} alt={name} width={200} />
    </li>
  );
};

export default ScrapeResoursesComponent;
