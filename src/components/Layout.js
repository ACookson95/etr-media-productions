import React from "react";
import { Footer } from "./Footer";
import { StyledNav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <>
      <StyledNav />
      <div>
        { children }
      </div>
      <Footer />
    </>
  )
}