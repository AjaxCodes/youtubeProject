import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [query, searchQuery] = useState([]);

  useEffect(() => {
    async function getQuery() {
      const result = await axios(
        `https://www.googleapis.com/youtube/v3/search?q=${query}&key=AIzaSyBiKmaon_yOMRfM0DlSB8LTASSnRlDWOXM`
      );
      searchQuery(result.query);
    }
    getQuery();
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Clicked");
  };

  return (
    <div className='App'>
      <header className='App-header'></header>
      <SearchBar handleSearch={handleSearch} handleSubmit={handleSubmit} />
      <Video />
    </div>
  );
}

export default App;
