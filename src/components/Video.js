import React from "react";
import styled from "styled-components";

export const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const StyledVideo = styled.video`
  
  `;

  return (
    <StyledVideo>
      <source src={videoSrcURL}/>
    </StyledVideo>
  )
}
  



