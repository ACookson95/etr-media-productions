import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <Container fluid className="p-0 h-100 d-flex flex-column justify-content-between">
      <Header />
      <Container fluid className="p-0">
        {children}
      </Container>
      <Footer />
    </Container>
  );
};

export default Layout;
