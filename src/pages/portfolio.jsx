import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { useState } from "react";
import VideoModal from "../components/VideoModal";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const VideoTile = ({ video, handleTileClick, index, thumbnail }) => {
  const thumbnailImage = getImage(
    thumbnail?.childImageSharp?.gatsbyImageData
  );
  return (
    <div className="overflow-hidden">
      <div
        className="aspect-video bg-zinc-500 cursor-pointer relative overflow-hidden flex items-center transform ease-in-out transition duration-500 hover:scale-110"
        onClick={() => handleTileClick(index)}
      >
        <GatsbyImage className="h-full w-full bg-cover" image={thumbnailImage} alt={video.title} />
        <div className="absolute opacity-0 hover:opacity-100 bg-zinc-700/20 top-0 left-0 w-full h-full p-4 flex justify-center items-center text-center text-xl text-zinc-50 transform ease-in-out transition duration-500">
          {video.title}
        </div>
      </div>
    </div>
  );
};

const Portfolio = ({ data }) => {
  const { videos } = data?.markdownRemark?.frontmatter;
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleTileClick = (index) => {
    setSelectedVideoIndex(index);
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <Layout>
      <VideoModal
        url={videos[selectedVideoIndex].videoUrl}
        open={videoOpen}
        onClose={handleVideoClose}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {videos.map((video, index) => (
          <VideoTile
            key={video.title}
            index={index}
            video={video}
            handleTileClick={handleTileClick}
            thumbnail={video.thumbnail}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery {
    markdownRemark(frontmatter: { path: { eq: "/portfolio" } }) {
      frontmatter {
        videos {
          title
          videoUrl
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;

export const Head = () => <SEO />;
