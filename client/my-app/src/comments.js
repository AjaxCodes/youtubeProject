
import React, { useState } from 'react';

import './comment.css';
import axios from 'axios';
import AddComment from './AddComment'

function Comments(props) {
  const [Comments, setComment] = useState("")

  const handleChange = e => {
    e.preventDefault();
    console.log("Comments console");
    // props.onSubmit(Comments);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/comments/add', {
      name: "",
      discription: Comments,
      category: ""
    })
      .then(res => {
        console.log(res, "comment saved!");
      });
  }

  return (
    <div className='comment-card'>
      <form onSubmit={handleChange}>
        <input
          type='text'
          id='input'
          onChange={e => setComment(e.target.value)}
        />

        <label>
          Leave a Comment
        <input type="text" onClick={onSubmit} />
        </label>
        <AddComment />
      </form>
    </div>
  );
}


export default Comments
