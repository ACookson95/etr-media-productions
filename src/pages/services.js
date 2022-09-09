import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { Row, Col, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Services = () => {
  return (
    <>
      <Layout>
        <Container fluid className="p-0">
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
          <Row className="g-0 bg-secondary">
            <Col className="p-3 mx-3 my-auto">
              <h4>Marketing Strategy</h4>
              <h5>Product Launches, Social Media, Websites</h5>
              <p>
                Every business should have a clear plan of action in place to
                guide the company towards their desired goals. By asking clear
                and targeted questions, we are able to help create a unique plan
                specific for your company.
              </p>
            </Col>
            <Col>
              <StaticImage
                src="../images/strategy.jpg"
                alt="strategy"
              />
            </Col>
          </Row>
          <Row className="g-0 bg-light">
            <Col xs={5}>
              <StaticImage
                src="../images/branding.jpeg"
                alt="branding products"
              />
            </Col>
            <Col className="p-3 mx-3 my-auto">
              <h4>Brand Identity</h4>
              <h5>Logos, Packaging, Brand Colors</h5>
              <p>
                Each brand is unique. We embrace that uniqueness by creating
                logos, marketing videos, and custom packaging specific to your
                needs. We'll help ensure that your brand and products will be
                clearly represented to all of your clients.
              </p>
            </Col>
          </Row>
          <Row className="g-0 bg-dark text-light">
            <Col className="p-3 mx-3 my-auto">
              <h4>Digital Media</h4>
              <h5>Videography, Photography, Social Media Posts</h5>
              <p>
                We help to deliver top tier quality media to your clients in a
                variety of formats. We create tailored content to help
                you reach the customers you want and need.
              </p>
            </Col>
            <Col xs={5}>
              <StaticImage src="../images/media.jpeg" alt="filming" />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Services;

export const Head = () => <SEO />;
