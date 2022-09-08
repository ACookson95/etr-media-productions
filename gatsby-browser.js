import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Theme from "./src/themes/theme";
import "bootstrap/dist/css/bootstrap.min.css";

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
      height: 100%;
  }

  body {
      margin: 0px;
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
