import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import Comments from './comments';



function App() {
  return (
    
    <div className="app">
      <Header /> 
      <div className="app__page">
      <Sidebar />
      <RecommendedVideos /> 
      <Comments />
      </div>
    </div>
  );
}

export default App;
