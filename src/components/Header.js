import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex">
            <StaticImage src="../images/etrLogo.png" alt="etr-logo" width="60" />
            <span className="p-2">MEDIA PRODUCTIONS</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="headerNav" />
          <Navbar.Collapse id="headerNav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
