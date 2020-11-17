import React, { useState } from 'react';
import './comment.css';
import { Form, TextArea } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import './comment.css';
import axios from 'axios';

const API = process.env.REACT_APP_YOUR_API_KEY_NAME
console.log(API)

export function commentThread(videoId, nextPageToken) {
  return axios.get('GET',
    'https://www.googleapis.com/youtube/v3/comments?part=id%2Csnippet&videoId={video.id.videoId}&key={process.env.REACT_APP_YOUR_API_KEY_NAME}',
    {
      part: 'id,snippet',
      pageToken: nextPageToken,
      videoId,
    }, null);
}


function Comments(props) {
  const [Comments, setComment] = useState("")

  const handleChange = e => {
    e.preventDefault();
    console.log("Comments console");
    props.onSubmit(Comments);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    const comVariables = {
        name: "",
        discription: Comments,
    }
  

    axios
    .post('https://www.googleapis.com/youtube/v3/comments?part=snippet.{video.id.videoId}', comVariables) 
      .then(response=> {
        if(response.data.success) {
            setComment("")
            props.refreshFunction(response.data.result)
          } else {
        
            console.log("comment saved!");
          }
        })
    }

  
  return (
    <div className='comment-card'>
      <commentThread />
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