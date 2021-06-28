import React from "react";

import NavBar from "./navbar";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header>
        <NavBar />
      </Header>
      <main className="content">{children}</main>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;
