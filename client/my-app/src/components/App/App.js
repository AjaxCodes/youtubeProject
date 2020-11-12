import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [video, setVideo] = useState([]);
  const [selectVideo, setSelectVideo] = useState(null);

  const handleSubmit = searchTerm => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${process.env.REACT_APP_API_KEY_YT}`
      )
      .then(response => {
        setVideo(response.data.items);
        setSelectVideo(response.data.items[0]);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <SearchBar onSubmit={handleSubmit} />
      <Video video={selectVideo} />
    </div>
  );
}

export default App;
