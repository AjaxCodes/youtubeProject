import React, { useState, useEffect } from "react";
import Video from "../Video/Video";
import SearchBar from "../SearchBar/SearchBar";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios("https://www.googleapis.com/youtube/v3/search");
    console.log(data);
    setData(result.data);
  });

  return (
    <div className='App'>
      <header className='App-header'></header>
      <SearchBar />
      <Video />
    </div>
  );
}

export default App;
