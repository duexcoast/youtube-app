import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideosList from "./components/VideosList";
import useVideos from "./hooks/useVideos";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos("mac miller");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onSearchSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideosList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
