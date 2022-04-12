import React from "react";
import styled from "styled-components";
import { Container } from "../Container";

export const Header = ({children}) => {
  const StyledHeader = styled.h1`
    width: 100%;
    text-align: center;
  `;
  return(
    <StyledHeader>
      <Container>
        {children}
      </Container>
    </StyledHeader>
  )
}