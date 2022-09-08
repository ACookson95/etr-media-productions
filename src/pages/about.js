import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const About = () => {
  return (
    <>
      <Layout>
        <p>About</p>
      </Layout> 
    </>
  )
}

export default About

export const Head = () => (
  <SEO />
)