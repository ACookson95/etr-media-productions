import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const Portfolio = () => {
  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col>
              <h4>Portfolio Section Coming Soon.</h4>
              <h5>Check out our Youtube channel to see some examples of our work.</h5>
            </Col>
          </Row>
        </Container>
      </Layout> 
    </>
  )
}

export default Portfolio

export const Head = () => (
  <SEO />
)