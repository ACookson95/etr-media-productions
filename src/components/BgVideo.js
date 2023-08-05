import React from "react";
import styled from "styled-components";

const BgVideo = ({ src, data }) => {

  const Video = styled.video`
    height: 100%;
    width: 100%;
    inset: 0;
    object-fit: cover;
  `

  return (
    <>
      <Video autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </Video>
    </>
  );
};

export default BgVideo;
