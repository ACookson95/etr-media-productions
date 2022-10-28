import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ServiceItem = styled(Row)``;

const ServiceItemCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${props => props.bg && props.theme.colors[props.bg] + "95"};
  color: ${props => props.theme.colors[props.color] && props.theme.colors[props.color]};
`;

const ServiceItemTitle = styled.h3``;

const ServiceItemSubtitle = styled.h4``;

const ServiceItemText = styled.p``;

const ServiceItemImgWrap = styled(Col)`
  margin-left: 0;
  z-index: -1;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-left: -100%;
  }
  padding: 0;
`;

const Services = () => {
  return (
    <>
      <Layout>
        <Container className="p-0">
          <Row className="g-0">
            <Col className="mx-5 my-3">
              <h2 className="p-3 border-bottom">Our Mission</h2>
              <p className="px-3">
                We are a Media driven company designed to help you and your
                brand reach new heights by giving you the media tools you need
                to reach your planned goals and company vision.
              </p>
            </Col>
          </Row>
          <ServiceItem>
            <ServiceItemCol xs={12} lg={7} bg="light2">
              <ServiceItemTitle>Marketing Strategy</ServiceItemTitle>
              <ServiceItemSubtitle>
                Product Launches, Social Media, Websites
              </ServiceItemSubtitle>
              <ServiceItemText>
                Every business should have a clear plan of action in place to
                guide the company towards their desired goals. By asking clear
                and targeted questions, we are able to help create a unique plan
                specific for your company.
              </ServiceItemText>
            </ServiceItemCol>
            <ServiceItemImgWrap>
              <StaticImage
                src="../images/strategy.jpg"
                alt="strategy"
              />
            </ServiceItemImgWrap>
          </ServiceItem>
          <ServiceItem className="flex-row-reverse">
            <ServiceItemCol xs={12} lg={7}>
              <ServiceItemTitle>Brand Identity</ServiceItemTitle>
              <ServiceItemSubtitle>
                Logos, Packaging, Brand Colors
              </ServiceItemSubtitle>
              <ServiceItemText>
                Each brand is unique. We embrace that uniqueness by creating
                logos, marketing videos, and custom packaging specific to your
                needs. We'll help ensure that your brand and products will be
                clearly represented to all of your clients.
              </ServiceItemText>
            </ServiceItemCol>
            <ServiceItemImgWrap>
              <StaticImage
                src="../images/branding.jpg"
                alt="strategy"
              />
            </ServiceItemImgWrap>
          </ServiceItem>
          <ServiceItem>
            <ServiceItemCol xs={12} lg={7} bg="dark1" color="light1">
              <ServiceItemTitle>Digital Media</ServiceItemTitle>
              <ServiceItemSubtitle>
                Videography, Photography, Social Media Posts
              </ServiceItemSubtitle>
              <ServiceItemText>
                We help to deliver top tier quality media to your clients in a
                variety of formats. We create tailored content to help you reach
                the customers you want and need.
              </ServiceItemText>
            </ServiceItemCol>
            <ServiceItemImgWrap>
              <StaticImage
                src="../images/media.jpeg"
                alt="strategy"
              />
            </ServiceItemImgWrap>
          </ServiceItem>
        </Container>
      </Layout>
    </>
  );
};

export default Services;

export const Head = () => <SEO />;
