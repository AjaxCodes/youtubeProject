import React, { useState } from 'react';
import './comment.css';
import { Form, TextArea } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import './comment.css';
import axios from 'axios';


function Comments(props) {
  const [Comments, setComment] = useState("")

  const handleChange = e => {
    e.preventDefault();
    console.log("Comments console");
    props.onSubmit(Comments);
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
      <label>
          Leave a Comment
          </label>
      {/* <form onSubmit={handleChange}>
        <input
          type='text'
          id='input'
          onChange={e => setComment(e.target.value)}
        />        
              </form> */}
        <div className='add-comment'>
          <Form style={{ display: 'flex' }} onSubmit={handleChange}>
            <Form.TextArea control={TextArea} placeholder='Add a comment' />
            <input type="text"onChange={e => setComment(e.target.value)}/>
            <Button type='submit' onClick={onSubmit} />
          </Form>

        </div>
    </div>
  );
}


export default Comments