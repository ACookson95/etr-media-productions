import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Hero = styled.div`
  height: 80vh;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 20px 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 72px;
    line-height: 86px;
    font-weight: normal;
    text-align: center;
    white-space: pre-wrap;
    color: white;
    text-shadow: 1px 1px 3px black;
  }

  .heroImage {
    height: 100%;
  }
`;

const indexPage = () => {
  return (
    <>
      <Layout>
        <Container fluid className="p-0">
          <Hero>
            <StaticImage
              className="heroImage"
              src="../images/banner1.png"
              alt="hero-banner"
            />
            <span>
              <h1>Show the world your story</h1>
              <Button type="button" variant="secondary">
                Get Started
              </Button>
            </span>
          </Hero>
        </Container>
        <Container className="py-5">
          <h4>
            We are Empower the Rebel Media Productions. We help individuals and
            companies showcase their work and products.
          </h4>
        </Container>
        <Container className="mb-4">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Marketing Strategy</Card.Title>
                  <Card.Text>
                    Product Launches, Social Media, Websites
                  </Card.Text>
                  <Button type="button" onClick={() => navigate("/services")}>
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Brand Identity</Card.Title>
                  <Card.Text>Logos, Packaging, Brand Colors</Card.Text>
                  <Button type="button" onClick={() => navigate("/services")}>
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Digital Media</Card.Title>
                  <Card.Text>
                    Videography, Photography, Social Media Posts
                  </Card.Text>
                  <Button type="button" onClick={() => navigate("/services")}>
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <h3>Clients</h3>
            </Col>
            <Col>
              <h3>Testimonials</h3>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default indexPage;

export const Head = () => <SEO />;
