import React from 'react';
import { ThemeProvider } from "styled-components";
import Theme from "./src/themes/theme";
import 'bootstrap/dist/css/bootstrap.min.css'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>
    {element}
  </ThemeProvider>
)