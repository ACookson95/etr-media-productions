import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const About = ({ data }) => {
  const { blurbs, about, heading, summary } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div className="bg-zinc-200">
        <div className="container mx-auto flex flex-col items-center p-8 py-36 gap-12">
          <div className="text-3xl text-center text-zinc-700">{heading}</div>
          <div className="text-xl text-center max-w-5xl text-zinc-700">
            {summary}
          </div>
        </div>
      </div>
      <div>
        {blurbs.map((blurb, index) => (
          <div key={index} className="grid grid-cols-5">
            {blurb.image && (
              <GatsbyImage
                image={getImage(blurb.image?.childImageSharp?.gatsbyImageData)}
                alt={`Blurb Image ${index + 1}`}
                className="col-span-5 md:col-span-2"
              />
            )}
            <div
              className={`col-span-5 md:col-span-3 ${index % 2 === 0 && "md:order-first"} flex flex-col justify-center p-10`}
            >
              <h3 className="text-2xl">{blurb.title}</h3>
              <p className="text-lg">{blurb.subtitle}</p>
              <p className="text-sm mt-4">{blurb.text}</p>
            </div>
          </div>
        ))}
      </div>
      {about.map((item, index) => (
        <div className="bg-zinc-200" key={item.title}>
          <div className="container mx-auto py-20">
            <div className="text-2xl text-center pb-20">
              {item.title}
            </div>
            <div key={index} className="grid grid-cols-1 md:grid-cols-2">
              {item.image && (
                <GatsbyImage
                  image={getImage(item.image?.childImageSharp?.gatsbyImageData)}
                  alt={`About Image ${index + 1}`}
                />
              )}
              <p className="p-10 self-center">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { path: { eq: "/about" } }) {
      frontmatter {
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          subtitle
          text
          title
        }
        about {
          title
          text
          image {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
        heading
        summary
      }
    }
  }
`;
export default About;

export const Head = () => <SEO />;
