import React from "react";
import Button from "../Button/Button";

export default function SearchBar(props) {
  return (
    <div className='searchBar'>
      <input type='text' id='input' onChange={props.handleSearch} />
      <Button handleSubmit={props.handleSubmit} />
    </div>
  );
}
