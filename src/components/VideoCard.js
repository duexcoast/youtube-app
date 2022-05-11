import React from "react";

const VideoCard = ({
  onVideoSelect,
  video,
  video: {
    snippet: { thumbnails, title },
  },
}) => {
  const onVideoClick = () => {
    onVideoSelect(video);
  };

  return (
    <div className="item video-card" onClick={onVideoClick}>
      <div className="image">
        <img src={thumbnails.medium.url} alt={title} />
      </div>
      <div className="content">
        <span className="header">{title}</span>
      </div>
    </div>
  );
};

export default VideoCard;
