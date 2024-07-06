import { Button, Menu } from "antd";
import Link from "antd/es/typography/Link";
import { LogoStyle, NavStyle } from "./Style";

export default function NavBar() {
  return (
    <Menu mode="horizontal" style={NavStyle}>
      <Menu.Item key="Logo" style={LogoStyle}>
        <Link href="/"> Pezmix </Link>
      </Menu.Item>
      <Menu.Item key="Features">
        <Link href="/Features"> Features </Link>
      </Menu.Item>
      <Menu.Item key="Pricing">
        <Link href="/Pricing"> Pricing </Link>
      </Menu.Item>
      <Menu.Item key="FAQ">
        <Link href="/FAQ"> FAQ </Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Button>login</Button>
      </Menu.Item>
      <Menu.Item key="Start Selling">
        <Button>Start Selling</Button>
      </Menu.Item>
    </Menu>
  );
}
