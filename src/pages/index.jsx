import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BgVideo from "../components/BgVideo";
import backgroundVideo from "../content/video/etr-hero-vid.mp4";
import { graphql } from "gatsby";
import TestimonyWidget from "../components/TestimonyWidget";

const Hero = (props) => (
  <div className="relative h-[90vh]">
    <BgVideo src={backgroundVideo} />
    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-4">
      <h1 className="p-2 text-zinc-50 text-center text-6xl [text-shadow:2px_2px_20px_rgb(0,0,0)]">
        {props.heading}
      </h1>
      <Link
        to="/about"
        className="text-zinc-50 p-2 border-solid border-2 border-zinc-50 rounded hover:bg-zinc-500/50 drop-shadow-2xl"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const indexPage = ({ data }) => {
  const {
    heading,
    summary,
    tiles,
    clients,
    clientLabel,
    testimonials,
  } = data.markdownRemark.frontmatter;
  return (
    <>
      <Layout>
        <Hero heading={heading} />
        <div className="flex items-center w-screen">
          {tiles.map((tile, index) => {
            const tileImage = getImage(
              tile.image?.childImageSharp?.gatsbyImageData
            );
            return (
              <Link
                to={tile.path}
                key={tile.title}
                className="relative flex cursor-pointer overflow-hidden"
              >
                <div className="transform transition duration-500 hover:scale-110">
                  <GatsbyImage
                    image={tileImage}
                    alt={tile.title}
                    className="min-h-[400px]"
                  />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-zinc-100 text-3xl hover:bg-zinc-500/50">
                    {tile.title}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="bg-zinc-100">
          <div className="container mx-auto flex flex-col items-center h-[60vh] p-8 pt-36 gap-12">
            <h1 className="text-2xl text-center">{summary}</h1>
            <TestimonyWidget testimonials={testimonials} />
          </div>
        </div>
        <div className="p-20">
          <div className="text-xl text-center mb-4">{clientLabel}</div>
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {clients.map((client) => {
              const clientImage = getImage(
                client.logo?.childImageSharp?.gatsbyImageData
              );
              return (
                <a
                  href={client.link}
                  target="_blank"
                  className="h-20 w-20 mx-auto flex justify-centerm items-center"
                >
                  <GatsbyImage
                    key={client.name}
                    alt={client.name}
                    image={clientImage}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { path: { eq: "/" } }) {
      frontmatter {
        heading
        summary
        tiles {
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          path
          title
        }
        clientLabel
        clients {
          name
          link
          logo {
            childImageSharp {
              gatsbyImageData(width: 100)
            }
          }
        }
        testimonials {
          body
          name
          company
        }
      }
    }
  }
`;

export default indexPage;

export const Head = () => <SEO />;
