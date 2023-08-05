import React from "react";
import styled from "styled-components";

const Thumbnail = styled.div`
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 56.25%;
  cursor: pointer;

  >span {
    color: white;
    opacity: 0;
  }

  :hover >span {
    opacity: 1;
  }

  :hover {
    opacity: 0.8;
  }
`;

const VideoGrid = ({videos, current, setActive}) => {

  const handleClick = (index) => {
    setActive(index)
  } 

  return(
    <div className="g-0 m-0 p-0">
      {videos.map((video, index) => {
        let active = current === index
        let url = `http://img.youtube.com/vi/${video.id}/${video.thumbnailNum}.jpg`
        return(
          <div key={index} title={video.title} active={active} xs={4} onClick={() => handleClick(index)}>
            <Thumbnail src={url}>
              <span>{video.title}</span>
            </Thumbnail>
          </div>
        )
      })}
    </div>
  )
}

export default VideoGrid