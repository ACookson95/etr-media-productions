import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const { blurbs, about, heading, summary } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <h1>{heading}</h1>
      <p>{summary}</p>
      {blurbs.map((blurb, index) => (
        <div key={index}>
          <h3>{blurb.title}</h3>
          <p>{blurb.subtitle}</p>
          <p>{blurb.text}</p>
          {blurb.image && (
            <GatsbyImage
              image={getImage(blurb.image?.childImageSharp?.gatsbyImageData)}
              alt={`Blurb Image ${index + 1}`}
            />
          )}
        </div>
      ))}
      <h2>About Section</h2>
      {about.map((item, index) => (
        <div key={index}>
          <p>{item.text}</p>
          {item.image && (
            <GatsbyImage
              image={getImage(item.image?.childImageSharp?.gatsbyImageData)}
              alt={`About Image ${index + 1}`}
            />
          )}
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query PageQuery{
    markdownRemark(frontmatter: {path: {eq: "/about"}}) {
      frontmatter {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
          subtitle
          text
          title
        }
        about {
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
        heading
        summary
      }
    }
  }
`
export default About;

export const Head = () => <SEO />;
