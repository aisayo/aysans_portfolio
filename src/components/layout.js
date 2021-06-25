import React from "react";

import NavBar from "./navbar";
import Header from "./header";
import "../assets/layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <NavBar />
      </Header>
      <main className="content">{children}</main>
    </React.Fragment>
  );
};

export default Layout;
