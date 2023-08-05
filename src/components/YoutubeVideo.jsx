import React from "react";

const YoutubeVideo = ({ id, height=315, width=560, title }) => {
  const src = 'https://www.youtube.com/embed/' + id + '?modestbranding=1&rel=0'
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={src}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
