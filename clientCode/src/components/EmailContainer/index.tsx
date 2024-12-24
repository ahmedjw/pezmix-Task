import React from "react";
import { EmailsContainerProps } from "./interfaces";
import { Card, Typography } from "antd";

const EmainContainer: React.FC<EmailsContainerProps> = () => {
  return (
    <Card>
      <Typography>Emails Scraped </Typography>
    </Card>
  );
};

export default EmainContainer;
