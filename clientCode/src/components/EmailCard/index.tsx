import { Button, Card, Col, Typography } from "antd";
import React from "react";
import { EmailCardProps } from "./interfaces";

export const EmailCard: React.FC<EmailCardProps> = ({ email }) => {
  const { Text } = Typography;

  return (
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
  );
};

export default index;
