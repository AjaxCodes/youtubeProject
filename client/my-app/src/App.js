import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import axios from "axios";
import VideoCard from "./VideoCard";
import SearchBar from "./SearchBar";
import "./SearchBar.css";
import VideoList from "./VideoList";

function App() {
  const [selectVideo, setSelectVideo] = useState(null);
  const [video, setVideo] = useState([]);

  const handleSubmit = searchTerm => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${process.env.REACT_APP_API_KEY_YT}`
      )
      .then(response => {
        setSelectVideo(response.data.items[0]);
        setVideo(response.data.items);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const onVideoSelect = video => {
    setSelectVideo(video);
    console.log("click");
  };

  return (
    <div className='app'>
      <Header />
      <SearchBar onSubmit={handleSubmit} />
      <div className='app__page'>
        <Sidebar />
        <VideoCard video={selectVideo} />
      </div>
      <VideoList videos={video} onVideoSelect={onVideoSelect} />
    </div>
  );
}

export default App;
