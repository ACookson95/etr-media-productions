import React from "react";
import styled from "styled-components";

export const Container = ({children}) => {
  const StyledContainer = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  `;

  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}