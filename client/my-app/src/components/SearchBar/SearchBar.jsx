import React, { useState } from "react";
import Button from "../Button/Button";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    console.log(searchTerm);
    props.onSubmit(searchTerm);
  };

  return (
    <div className='searchBar'>
      <form onSubmit={handleSearch}>
        <input
          type='text'
          id='input'
          onChange={e => setSearchTerm(e.target.value)}
        />
        <Button type='submit' />
      </form>
    </div>
  );
}
