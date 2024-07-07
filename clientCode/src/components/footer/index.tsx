import { Typography } from "antd";
import React from "react";

export const Footer: React.FC = () => {
  const { Title } = Typography;

  return (
    <Title level={5} style={{ position: "absolute", bottom: 0 }}>
      pezmix. All rights reserved. © 2024
    </Title>
  );
};
export default Footer;
