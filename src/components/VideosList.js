import React from "react";
import VideoCard from "./VideoCard";

export default function VideosList(props) {
  const renderedList = props.videos.map(video => {
    // console.log(snippet.description);
    return (
      <VideoCard
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });

  return <div className="ui items">{renderedList}</div>;
}
