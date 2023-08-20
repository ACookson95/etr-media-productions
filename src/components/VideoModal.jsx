import React from "react";
import YouTubePlayer from "react-player/youtube";

const VideoModal = ({ open, onClose, width="100%", height="100%", url }) => {

  if (!open) return null;
  return (
    <div 
      className="fixed left-0 top-0 z-[1055] h-screen w-screen bg-black/70 flex justify-center items-center py-10 px-4 md:px-36"
      onClick={onClose}
    >
      <div className="aspect-video max-h-full w-full">
        <YouTubePlayer
          width={width}
          height={height}
          url={url} 
          controls 
        />
      </div>
    </div>
  );
};

export default VideoModal;
