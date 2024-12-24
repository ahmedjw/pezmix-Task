import React from "react";
import { EmailsContainerProps } from "./interfaces";
import { Card, Typography } from "antd";

const EmainContainer: React.FC<EmailsContainerProps> = ({ emails }) => {
  return (
    <Card>
      <h3>Emails </h3>
      {emails.map((email) => (
        <Card>
            
          <Typography>{email}</Typography>
        </Card>
      ))}
    </Card>
  );
};

export default EmainContainer;
