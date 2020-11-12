import React, { useState } from "react";
import Button from "../Button/Button";

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.value);
    props.onSubmit(searchTerm);
  };

  return (
    <div className='searchBar'>
      <input type='text' id='input' onChange={e => setSearchTerm(e)} />
      <Button onSubmitButton={handleSearch} />
    </div>
  );
}
