import * as React from "react";
import { navigate } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { Container, Button, Row, Col, Card, CardImg } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";
import BgVideo from "../components/BgVideo";
import heroVid from "../video/etr-hero-vid.mp4"

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
    padding: 20px 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: clamp(50px, 11vw, 100px);
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    margin-bottom: 20px;
    max-width: 1270px;
  }
`;

const indexPage = () => {
  return (
    <>
      <Layout>
        <Container fluid className="p-0">
          <Hero>
            {/* <StaticImage
              className="heroImage"
              src="../images/banner1.png"
              alt="hero-banner"
              style={{
                height: '100%',
                width: '100%',
                inset: 0,
                objectFit: 'cover',
              }}
            /> */}
            <BgVideo src={heroVid}/>
            <span>
              <h1 className="h1">Show the world your story</h1>
              <Button type="button" variant="light" size="lg" onClick={() => navigate("/contact")}>
                Get Started
              </Button>
            </span>
          </Hero>
        </Container>
        <Container className="py-4 mb-2 border-bottom w-75">
          <h4 className="text-center">
            We are Empower the Rebel Media Productions. We help individuals and
            companies showcase their work and products.
          </h4>
        </Container>
        <Container className="py-4 mb-2 border-bottom">
          <Row xs={1} sm={1} md={3} lg={3}>
            <Col className="my-2">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Marketing Strategy</Card.Title>
                  <Card.Text>
                    Product Launches, Social Media, Websites
                  </Card.Text>
                  <Button
                    type="button"
                    className="mx-2"
                    variant="dark"
                    onClick={() => navigate("/services")}
                  >
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-2">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Brand Identity</Card.Title>
                  <Card.Text>Logos, Packaging, Brand Colors</Card.Text>
                  <Button
                    type="button"
                    className="mx-2"
                    variant="dark"
                    onClick={() => navigate("/services")}
                  >
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="my-2">
              <Card className="h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Digital Media</Card.Title>
                  <Card.Text>
                    Videography, Photography, Social Media Posts
                  </Card.Text>
                  <Button
                    type="button"
                    className="mx-2"
                    variant="dark"
                    onClick={() => navigate("/services")}
                  >
                    See More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="mb-5">
          <Row xs={1} sm={1} md={2}>
            <Col className="my-2">
              <h3 className="py-4 mb-2 border-bottom text-center">Clients</h3>
              <StaticImage src="../images/clients.png" alt="clients-list" />
            </Col>
            <Col className="my-2">
              <h3 className="py-4 mb-2 border-bottom text-center">
                Testimonials
              </h3>
              <div className="m-3">
                <p className="quote fw-lighter fst-italic m-1">
                  "I've worked with ETR on a few different projects. Ben is
                  awesome! He has a lot of really good insight and vision on
                  what looks good and will appeal to the right audience. I
                  definitely recommend anyone looking to grow their company to
                  get with them!"
                </p>
                <p className="text-center">~ Aaron Cookson - Web Design</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default indexPage;

export const Head = () => <SEO />;
