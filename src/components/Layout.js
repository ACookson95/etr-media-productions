import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="mb-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
