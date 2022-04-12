import React from "react";
import ReactPlayer from 'react-player/lazy';
import styled from "styled-components";
import { Button } from "../../components";


export const Cover = () => {
  const VideoWrapper = styled.div`
  position: relative;
  min-height: 400px;
  max-height: 600px;
  width: 100%;
  padding-top: 56.25%;
  background-color: ${props => props.theme.colors.dark1};
  & .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
  & ::before {
    content: '';
    background: linear-gradient(135deg,${props => props.theme.colors.dark2},${props => props.theme.colors.highlight1});
    opacity: 0.4;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.colors.light1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  & h1 {
    font-size: 72px;
    text-align: center;
  }
  & h3 {
    font-size: 50px;
    text-align: center;
  }
`;

return (
  <>
   <VideoWrapper>
          <ReactPlayer 
            url='https://vimeo.com/32001208'
            muted
            playing
            loop
            width='100%'
            height='100%'
            className='react-player'
          />
          <VideoOverlay>
            <h1>
              Commercial Videography
            </h1>
            <h3>
              What's your story?
            </h3>
            <Button>
              Get a Quote
            </Button>
          </VideoOverlay>
        </VideoWrapper>
  </>
)
}