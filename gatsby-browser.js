import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from "./src/themes/theme";


const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  body {
    margin: 0px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  div[role="group"][tabindex] {
    height: 100%;
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);
