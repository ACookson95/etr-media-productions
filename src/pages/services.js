import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const ServiceItem = styled(Row)`
`;

const ServiceItemCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${props => props.bg && props.theme.colors[props.bg] + "95"};
  color: ${props => props.color && props.theme.colors[props.color]};
  padding: 30px;
`;

const ServiceItemTitle = styled.h4`

`;

const ServiceItemSubtitle = styled.h5`
  padding-bottom: ${props => props.theme.spacings.sm};
  border-bottom: 1px solid ${props => props.color && props.theme.colors[props.color]};
`;

const ServiceItemText = styled.p``;

const ServiceItemImgWrap = styled(Col)`
  ${props => props.flip ? "margin-right" : "margin-left"}: 0;
  z-index: -1;
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    ${props => props.flip ? "margin-right" : "margin-left"}: -100%;
  }
  padding: 0;

  >div {
    height: 100%;
  }
`;

const Mission = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacings.lg};
  margin: 0 ${props => props.theme.spacings.xl};
  `;

const MissionTitle = styled.h2`
  padding: 0 ${props => props.theme.spacings.lg};
  border-bottom: 1px solid ${props => props.theme.colors.light2}
`

const MissionStatement = styled.div`
  font-style: italic;
  text-align: center;
`

const Services = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Mission>
              <MissionTitle>Our Mission</MissionTitle>
              <MissionStatement>
                We are a media driven company designed to help you and your
                brand reach new heights by giving you the media tools you need
                to reach your planned goals and company vision.
              </MissionStatement>
            </Mission>
          </Row>
          <ServiceItem className="g-0">
            <ServiceItemCol xs={12} md={7} bg="light2">
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
          <ServiceItem className="flex-row-reverse g-0">
            <ServiceItemCol xs={12} md={7} bg="light1">
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
            <ServiceItemImgWrap flip>
              <StaticImage
                src="../images/branding.jpg"
                alt="strategy"
              />
            </ServiceItemImgWrap>
          </ServiceItem>
          <ServiceItem className="g-0">
            <ServiceItemCol xs={12} md={7} bg="dark1" color="light1">
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
