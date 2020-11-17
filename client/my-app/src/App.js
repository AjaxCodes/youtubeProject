import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./sidebar";
import RecommendedVideos from "./RecommendedVideos";
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
        console.log(response);
        setSelectVideo(response.data.items[0]);
        setVideo(response.data.items);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className='app'>
      <Header />
      <div className='searchBar'>
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className='app__page'>
        <Sidebar />
        {/* <RecommendedVideos video={video} /> */}
        <VideoList videos={video} />
        <VideoCard video={selectVideo} />
      </div>
    </div>
  );
}

export default App;
