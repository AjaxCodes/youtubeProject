import React, { useState }from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import axios from 'axios';
import VideoCard from "./VideoCard";
import CommentThreads from './comment'


function App() {
  const [video, setVideo] = useState(null);

  const handleSubmit = searchTerm => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=${process.env.REACT_APP_API_KEY_YT}`
      )
      .then(response => {
        setVideo(response.data.items[0]);
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  return (
    <div className='app'>
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
        <VideoCard video={setVideo} />
        <CommentThreads />
      </div>
    </div>
  );
}

export default App;
