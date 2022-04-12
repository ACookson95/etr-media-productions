import React from "react";
import styled from "styled-components";
import { Container } from "../Container";

export const Summary = () => {
  const SummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  `;
  const Title = styled.h1`
  
  `;
  const Subtitle = styled.h3`
  
  `;
  const Text = styled.p`
  
  `;

  return (
    <SummaryWrapper>
      <Container>
        <Title>
          We are ETR Media Productions.
        </Title>
        <Subtitle>
          Let us help you ..... insert something here
        </Subtitle>
        <Text>
          Here at ETR Media Productions we ... lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus.
        </Text>
      </Container>
    </SummaryWrapper>
  )
}