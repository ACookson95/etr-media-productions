import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';

export const Footer = () => {
  const FooterWrapper = styled.div`
    background-color: ${props => props.theme.colors.dark1};
    color: ${props => props.theme.colors.light1};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${props => props.theme.spacings.md};
  `;
  const FooterText = styled.div`

  `;
  const SocialLinks = styled.div`

  `;

  const StyledIcon = styled.div`
    padding: ${props => props.theme.spacings.lg};
    width: "100%";
  `;

  return (
    <FooterWrapper>
      <FooterText>
        @copyright stuff. Other info.
      </FooterText>
      <SocialLinks>
        <p>{props => props.theme.colors.light1}</p>
        <StyledIcon as={SocialIcon} url="https://linkedin.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://github.com/"  fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://facebook.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://youtube.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://instagram.com/" fgColor="#FFFFFF"/>
      </SocialLinks>
    </FooterWrapper>
  )
}