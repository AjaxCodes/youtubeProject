import React , {useState}from 'react'
import { Button, Input } from 'antd';
import axios from 'axios';


function Comments(props) {
 
        axios.post('http://localhost:3000/api/comments/add')
        .then(response=> {
            if(response.data.success) {
                setComment("")
                props.refreshFunction(response.data.result)
            } else {
                alert('Failed to save Comment')
            }
        })
    }

    return (
        <div>
            <br />
            <p> replies</p>
            <br />
            {console.log("testing comments")}

           
        </div>
    )
}

export default Comments
