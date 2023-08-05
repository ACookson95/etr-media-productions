import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="p-0 h-100 d-flex flex-column justify-content-between">
      <Header />
      <div className="p-0">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
