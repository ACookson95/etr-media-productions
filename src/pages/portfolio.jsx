import * as React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";
import { graphql } from "gatsby";
import { useState } from "react";
import VideoModal from "../components/VideoModal";

const VideoTile = ({ video, handleTileClick, index }) => {
  const parseYoutubeId = (url) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : false;
  };
  const youtubeId = parseYoutubeId(video.videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
  return (
    <div className="overflow-hidden">
      <div
        className="aspect-video bg-zinc-500 cursor-pointer relative overflow-hidden flex items-center transform ease-in-out transition duration-500 hover:scale-110"
        onClick={() => handleTileClick(index)}
      >
        <img className="w-full" src={thumbnailUrl} alt={video.title} />
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
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {videos.map((video, index) => (
          <VideoTile
            key={video.title}
            index={index}
            video={video}
            handleTileClick={handleTileClick}
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
        }
      }
    }
  }
`;

export default Portfolio;

export const Head = () => <SEO />;
