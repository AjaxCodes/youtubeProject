import React , {useState} from 'react';
import {Button, Icon} from "semantic-ui-react";
import './comment.css';
import axios from 'axios';

export function Comments(props) {
    const [Comments, setComment] = useState("")
    
    const handleChange = (e) => {
        setComment(e)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/comments/add', {
            name: "",
            discription: Comments,
            category:""
        })
        .then(res => {
            console.log(res, "comment saved!");
          });
    }

    

  return (
    <div >
      <h4>{props.amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
      <label>
       Leave a Comment
        <input type="text"  onClick={onSubmit} />
      </label>
      <input type="submit" value="Submit"  onChange={e =>handleChange(e.target.value)}/>
    </div>
  );
}



export default Comments
