import React from "react";
import { EmailsContainerProps } from "./interfaces";
import { Button, Card, Col, Row, Typography } from "antd";

const { Title, Text } = Typography;
const EmainContainer: React.FC<EmailsContainerProps> = ({ emails }) => {
  return (
    <>
      <Title level={2}>Emails:</Title>
      <Row gutter={[32, 24]}>
        {emails.map((email) => (
         
        ))}
      </Row>
    </>
  );
};

export default EmainContainer;
