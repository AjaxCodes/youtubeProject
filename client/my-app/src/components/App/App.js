import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";
import apiKey from "../../api/apiKey";

function App() {
  const handleSubmit = searchTerm => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&key=AIzaSyB-TOqHu5AM7wZxSaaSwuJEuZn_vZbeILU`
      )
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err.response);
      });
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
