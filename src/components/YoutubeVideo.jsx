import React from "react";
import { Ratio } from "react-bootstrap";

const YoutubeVideo = ({ id, height=315, width=560, title }) => {
  const src = 'https://www.youtube.com/embed/' + id + '?modestbranding=1&rel=0'
  return (
    <Ratio aspectRatio='16x9'>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowfullscreen
      ></iframe>
    </Ratio>
  );
};

export default YoutubeVideo;
