import React from "react";
import styled from "styled-components";

export const Button = ({children}) => {

  const StyledButton = styled.div`
  
  `;

  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}