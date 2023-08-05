import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "graphql";

const Portfolio = ({ data }) => {
  console.log(data)
  const { videos } = data.markdownRemark.frontmatter;
  return (
    <Layout>
        {videos.map((video) => (
          <div key={video.title}>
            <span>{video.title}</span>
            <span>{video.description}</span>
            <span>{video.videoUrl}</span>
          </div>
        ))}
    </Layout>
  )
};

export const query = graphql`
  query PageQuery{
    markdownRemark(frontmatter: {path: {eq: "/portfolio"}}) {
      frontmatter {
        videos {
          description
          title
          videoUrl
        }
      }
    }
  }
`

export default Portfolio;

export const Head = () => <SEO />;
