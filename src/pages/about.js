import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import styled from "styled-components";

const TextBox = styled.div`
  background-color: ${props => props.bg && props.theme.colors[props.bg] };
  color: ${props => props.color && props.theme.colors[props.color] };
  padding: ${props => props.theme.spacings.lg};
  z-index: 10;
`
const About = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row className="m-4">
          
            <Col xs={10} lg={8}>
              <TextBox bg="light2" color="dark2" style={{margin: "0 0 -30% -10%"}}>
                Simon Sinek simply stated, “People don’t buy what you do; they buy
                why you do it. And what you do simply proves what you believe.”
                Empower the Rebel was built around the idea that each step that we
                take and each decision we make truly reveals who we are and what
                we believe. It is when our actions prove our beliefs that our
                client base or ‘audience’ is willing to buy our products and
                services because their beliefs are similar to ours.
                <br />
                Our mission is to help you as a company connect with your clients
                on a more personal level, and then show them what you have to
                offer. We bring your products and services to life, highlighting
                your customer’s lifestyle through customized videos created
                specifically for you and your company.
              </TextBox>
            </Col>
            <Col xs={8} className="ms-auto">
              <StaticImage
                src="../images/about-banner.png"
                alt="filming banner"
                style={{zIndex: -1}}
              />
            </Col>
          </Row>
          <Row className="m-4">
            <Col xs={6}>
              <StaticImage
                src="../images/about-portrait.png"
                alt="founder portrait"
                style={{marginTop: "-25%", maxWidth: "400px", zIndex: -1}}
              />
            </Col>
            <Col xs={12} lg={9} className="ms-auto">
              <TextBox bg="dark1" color="light1" style={{margin: "-20% 0 0 0"}}>
                Ben Barlow is a videographer based in Provo Utah with over 5 years
                of experience in his craft. Ben was first introduced to
                videography during his sophomore year at high school, editing a
                lightsaber battle that was painted frame by frame until the video
                was completed 3 months later. He has since grown from the videos
                he had created using Adobe After Effects and Premiere Pro and is
                now using Davinci Resolve to create more cinematic and closer to
                life videos that can help spread positivity and change the world
                for the better.
                <br />
                Through constant creation and a different perception on how most
                view the world, Ben has grown constantly seeking to push the
                boundaries on what is possible and what can be accomplished. You
                do not need to be signed by a label to create an album, you do not
                need to be contracted with a production company to film a full
                length movie, and you do not need anyone else’s permission to
                create the art that lives inside of you.
              </TextBox>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default About;

export const Head = () => <SEO />;
