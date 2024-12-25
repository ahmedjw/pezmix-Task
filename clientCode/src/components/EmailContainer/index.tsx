import React from "react";
import { EmailsContainerProps } from "./interfaces";
import { Card, Col, Row, Typography } from "antd";

const { Title } = Typography;
const EmainContainer: React.FC<EmailsContainerProps> = ({ emails }) => {
  return (
    <>
      <Title level={2}>Emails:</Title>
      <Row gutter={[32, 24]}>
        {emails.map((email) => (
          <Col span={6}>
            <Card>
              <Typography>{email}</Typography>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EmainContainer;
