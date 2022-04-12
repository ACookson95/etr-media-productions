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
    margin-top: auto;
  `;
  const FooterText = styled.div`
    padding: ${props => props.theme.spacings.md};
    color: ${props => props.theme.colors.light2};
  `;
  const SocialLinks = styled.div`
    & a {
      margin: ${props => props.theme.spacings.md};
      transition: all .25s ease-in-out;
    }
    & a:hover {
      transform: scale(1.2);
    }
  `;

  const StyledIcon = styled.div`

  `;

  return (
    <FooterWrapper>
      <FooterText>
        © 2021 All Rights Owned by Empower the Rebel LLC
      </FooterText>
      <SocialLinks>
        <StyledIcon as={SocialIcon} url="https://linkedin.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://facebook.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://youtube.com/" fgColor="#FFFFFF"/>
        <StyledIcon as={SocialIcon} url="https://instagram.com/" fgColor="#FFFFFF"/>
      </SocialLinks>
    </FooterWrapper>
  )
}