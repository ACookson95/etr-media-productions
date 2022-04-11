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
    align-items: center;
  `;

  const NavLogo = styled.div`
    padding: ${props => props.theme.spacings.md};
    width: 90px;
  `;

  const NavTitle = styled.h1`
    padding: ${props => props.theme.spacings.lg};
    width: min-content;
    white-space: nowrap;
  `;

  const NavLinks = styled.div`
    & a {
      text-decoration: none;
      color: ${props => props.theme.colors.light1};
      padding: ${props => props.theme.spacings.md};
      font-size: 24px;
      transition: all .25s ease-in-out;
    }
    & a:hover {
      color: ${props => props.theme.colors.highlight1};
      border-bottom: solid 3px;
    }

  `;
  return(
    <NavWrapper>
      <NavBrand>
        <NavLogo>
          <Logo />
        </NavLogo>
        <NavTitle>ETR Media Productions</NavTitle>
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