import React from "react";
import { SocialIcon } from "react-social-icons";
import { Container, Stack, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-dark">
      <Container className='pt-4 '>
        <Row className="">
          <Col>
          </Col>
          <Col md='auto'>
            <Stack direction='horizontal' className="d-flex justify-content-evenly">
              <SocialIcon url="https://www.linkedin.com/in/ben-barlow-38363a175/" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://www.facebook.com/ben.barlow.967" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://www.youtube.com/channel/UCIFJFLVbrNsNWy8zEXAp-Xg/featured" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
              <SocialIcon url="https://instagram.com/etrmediaproductions/" target="_blank" fgColor="#FFFFFF" className="mx-2"/>
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-muted fw-light mt-3 mb-0 text-center">
              © 2021 All Rights Owned by Empower the Rebel LLC. <br/>
              Created by Aaron Cookson using GatsbyJS.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
