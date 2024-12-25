import React from "react";
import NavBar from "./navBar";
import { Outlet } from "react-router-dom";
import { contentStyle } from "./navBar/Style";

export const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={contentStyle}>
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
