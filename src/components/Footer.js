import React from "react";
import { SocialIcon } from "react-social-icons";
import { Navbar, Container, Stack } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar variant='dark' bg='dark' className='py-4'>
      <Container>
        <p className="text-muted">
          © 2021 All Rights Owned by Empower the Rebel LLC. <br/>
          Created by Aaron Cookson using GatsbyJS.
        </p>
        <Stack direction='horizontal' gap={2}>
          <SocialIcon url="https://linkedin.com/" fgColor="#FFFFFF" />
          <SocialIcon url="https://facebook.com/" fgColor="#FFFFFF" />
          <SocialIcon url="https://youtube.com/" fgColor="#FFFFFF" />
          <SocialIcon url="https://instagram.com/" fgColor="#FFFFFF" />
        </Stack>
      </Container>
    </Navbar>
  );
};

export default Footer;
