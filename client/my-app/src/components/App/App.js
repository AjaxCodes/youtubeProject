import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import apiKey from "../../apiKey";

function App() {
  const [query, searchQuery] = useState([]);

  useEffect(() => {
    async function getQuery() {
      const result = await axios(
        `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${apiKey}`
      );
      searchQuery(result.query);
    }
    getQuery();
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    function searchByKeyword() {
      var results = YouTube.Search.list("id,snippet", {
        q: "dogs",
        maxResults: 25,
      });

      for (var i in results.items) {
        var item = results.items[i];
        Logger.log("[%s] Title: %s", item.id.videoId, item.snippet.title);
      }
    }
    searchByKeyword();
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
