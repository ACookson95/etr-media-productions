import React from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import styled from "styled-components";

export const Layout = ({ children }) => {
  const PageWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `;

  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  return (
    <PageWrapper>
      <Nav />
      <ContentWrapper>
        { children }
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  )
}