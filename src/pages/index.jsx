import * as React from "react";
import { Link, navigate } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import BgVideo from "../components/BgVideo";
import backgroundVideo from "../content/video/etr-hero-vid.mp4"
import { graphql } from "gatsby";

const Hero = styled.div`
  height: 80vh;
  max-height: 800px;
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
    font-size: clamp(40px, 11vw, 100px);
    text-align: center;
    color: white;
    text-shadow: 1px 1px 3px black;
    margin-bottom: 20px;
    max-width: 1270px;
  }
`;

const indexPage = ({ data }) => {
  const { heading, mainpitch, tiles } =
    data.markdownRemark.frontmatter;
  return (
    <>
      <Layout>
        <div className="p-0">
          <Hero>
            <BgVideo src={backgroundVideo} />
            <span>
              <h1>{heading}</h1>
              <Link to="/About">Learn More</Link>
            </span>
          </Hero>
        </div>
        <div className="py-4 mb-2 border-bottom w-75">
          <h4 className="text-center">{mainpitch}</h4>
        </div>
        {tiles.map((tile) => {
          const tileImage = getImage(
            tile.image?.childImageSharp?.gatsbyImageData
          );
          return (
            <Link to={tile.path} key={tile.title}>
              <GatsbyImage image={tileImage} alt={tile.title} />
              <span>{tile.title}</span>
            </Link>
          );
        })}
        <div className="mb-5">
          <div>
            <div className="my-2">
              <h3 className="py-4 mb-2 border-bottom text-center">Clients</h3>
            </div>
            <div className="my-2">
              <h3 className="py-4 mb-2 border-bottom text-center">
                Testimonials
              </h3>
              <div className="m-3">
                <p className="quote fw-lighter fst-italic m-1">
                  "I've worked with ETR on a few different projects. Ben is
                  awesome! He has a lot of really good insight and vision on
                  what looks good and will appeal to the right audience. I
                  definitely recommend anyone looking to gdiv their company to
                  get with them!"
                </p>
                <p className="text-center">~ Aaron Cookson - Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { path: { eq: "/index" } }) {
      frontmatter {
        heading
        mainpitch
        tiles {
          image {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
          path
          title
        }
      }
    }
  }
`;

export default indexPage;

export const Head = () => <SEO />;
