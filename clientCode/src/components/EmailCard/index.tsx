import { Button, Card, Col, Typography } from "antd";
import React from "react";

export const EmailCard: React.FC = ({ email }: any) => {
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
