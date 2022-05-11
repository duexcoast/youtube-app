import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
  };
  return {videos, search}
};

export default useVideos;
