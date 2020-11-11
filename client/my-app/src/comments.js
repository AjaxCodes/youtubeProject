import React from 'react';
import {Button, Icon} from "semantic-ui-react";
import './comments.css';

export function Comments(props) {
  return (
    <div className='comments-header'>
      <h4>{props.amountComments} Comments</h4>
      <Button basic compact icon labelPosition='left'>
        <Icon name='align left' />
        Sort by
      </Button>
    </div>
  );
}


// import React , {useState}from 'react'
// import axios from 'axios';
// import Button from '@material-ui/core/Button';
// import './comments.css'
// import Input from '@material-ui/core/FilledInput';
 
// const { TextArea } = Input
// let input = 'test'

// function Comments(props) {
//     const [Comments, setComment] = useState("")
    
//     const handleChange = (e) => {
//         setComment(e.currentTarget.value)
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//     }

    
//     axios.post('/api/comments/add', {
//             name: "",
//             discription:"",
//             category:""
//         })
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//           });
      
//         // .then(response=> {
//         //     if(response.data.success) {
//         //         setComment("")
//         //         props.refreshFunction(response.data.result)
//         //     } else {
//         //         alert('Comment did not save.')
//         //     }
//         // })
    

//     return (
//         <div>
//             <br />
//             <p className="comments-header">Comments</p>
//             <br />
//             {console.log("testing comments")}
//             <form style={{ display: 'flex' }} onSubmit={onSubmit}>
//                 < TextArea onChange={handleChange}
//                     value={Comments}
//                     placeholder= {input}
//                 />
//                 <br />
//                 <Button style={{ width: '20%', height: '50px' }} onClick={onSubmit}>Submit</Button>
//             </form>
//              </div>
//     )
// }

export default Comments
