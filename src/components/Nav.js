import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Logo } from "./Logo";

export const StyledNav = () => {
  return(
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand>
        <Logo />
        ETR Media Productions
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/">Portfolio</Nav.Link>
          <Nav.Link as={Link} to="/process">Process</Nav.Link>
          <Nav.Link as={Link}to="/about">About</Nav.Link>
          <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar> 
  )
}