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
          <Col span={6}>
            <Card style={{ gap: "30px" }}>
              <Typography>
                <Text type="warning">Name: </Text>
                {email}
              </Typography>
              <Typography>
                <Text type="warning">Email: </Text>
                {email}
              </Typography>
              <Button>Send Email</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default EmainContainer;
