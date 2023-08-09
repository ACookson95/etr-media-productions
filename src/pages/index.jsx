import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BgVideo from "../components/BgVideo";
import backgroundVideo from "../content/video/etr-hero-vid.mp4";
import { graphql } from "gatsby";

const Hero = (props) => (
  <div className="relative h-[70vh]">
    <BgVideo src={backgroundVideo} />
    <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center gap-4">
      <h1 className="p-2 text-zinc-50 text-center text-6xl [text-shadow:2px_2px_20px_rgb(0,0,0)]">{props.heading}</h1>
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
  const { heading, summary, tiles, description } = data.markdownRemark.frontmatter;
  return (
    <>
      <Layout>
        <Hero heading={heading} />
        <div className="py-10 bg-gradient-to-tr from-zinc-200 to-white">
          <div className="container mx-auto flex w-full gap-5">
            <div className="flex flex-col items-center w-1/2 gap-5">
              {tiles.map((tile, index) => {
                const tileImage = getImage(
                  tile.image?.childImageSharp?.gatsbyImageData
                );
                const isEven = index % 2 == 0
                return (
                  <Link
                    to={tile.path}
                    key={tile.title}
                    className={`relative flex h-48 max-w-lg min-w-min overflow-hidden rounded-xl drop-shadow-md	${isEven ? "mr-[20%]" : "ml-[20%]"} cursor-pointer transform transition duration-500 hover:scale-110`}
                  >
                    <GatsbyImage
                      image={tileImage}
                      alt={tile.title}
                      className="w-full"
                    />
                    <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-zinc-100 text-3xl hover:bg-zinc-500/50">
                      {tile.title}
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="h-full w-1/2 py-12 px-8 bg-white">
              <h1 className="text-xl text-center">{summary}</h1>
              <div className="m-8 border-solid border-b-2 border-zinc-300"/>
              <p>{description}</p>
            </div>
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
        description
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
