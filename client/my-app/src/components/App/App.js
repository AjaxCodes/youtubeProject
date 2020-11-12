import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import apiKey from "../../api/apiKey";

function App() {
  const handleSubmit = async searchTerm => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&=${searchTerm}&type=video&=${apiKey}`
      );
      console.log(response);
      return response;
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <SearchBar onSubmit={handleSubmit} />
      <Video />
    </div>
  );
}

export default App;
