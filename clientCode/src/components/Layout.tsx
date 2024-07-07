import React from "react";
import NavBar from "./navBar";
import { Outlet } from "react-router-dom";
import { contentStyle } from "./navBar/Style";
import Footer from "./footer";

export const Layout: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={contentStyle}>
        <Outlet />
      </div>
      <Footer />
      {/* // instead of building a footer component */}
    </>
  );
};
export default Layout;
