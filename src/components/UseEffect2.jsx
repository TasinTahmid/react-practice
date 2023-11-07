import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UseEffect2 = () => {
    const [post, setPost] = useState({});
    const [postID, setPostID] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(function (response) {
                console.log(response.data);
                setPost(response.data);
            });
    },[postID]);

    return (
        <div>
            <p>UseEffect2</p>

            <input 
                type="text" 
                value={postID} 
                onChange={(e)=>{
                    setPostID(e.target.value);
                }}
            /> <br /> <br />

            <li>{post.title}</li>
                


        </div>
    )
}

export default UseEffect2;