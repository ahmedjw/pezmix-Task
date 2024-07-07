import { Button, Space, Typography } from "antd";
import { Link } from "react-router-dom";

export const Services: React.FC = () => {
  const { Title } = Typography;

  return (
    <>
      <Title level={3}>Pezmix Services:</Title>
      <Space size="large">
        <Button type="primary" htmlType="submit">
          <Link to="service/emailscraping">Email scraping Service</Link>
        </Button>
        <Button type="primary" htmlType="submit">
          <Link to="service/emailsend">Email Send Service</Link>
        </Button>
      </Space>
    </>
  );
};
export default Services;
