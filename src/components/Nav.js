import React from "react";
import { Link } from "gatsby";
import { Logo } from "./Logo";
import styled from "styled-components";

export const Nav = () => {
  const NavWrapper = styled.div`
    background-color: ${props => props.theme.colors.dark1};
    color: ${props => props.theme.colors.light1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.spacings.md};
  `;
  const NavBrand = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const NavLogo = styled.div`
  
  `;

  const NavTitle = styled.h2`
  
  `;

  const NavLinks = styled.div`
  
  `;
  return(
    <NavWrapper>
      <NavBrand>
        <NavLogo>
          <Logo />
        </NavLogo>
        <NavTitle>Brand Title</NavTitle>
      </NavBrand>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/process">Process</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </NavWrapper>
  )
}