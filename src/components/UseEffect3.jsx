import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UseEffect3 = () => {
    const [post, setPost] = useState({});
    const [postID, setPostID] = useState(1);
    const [idChanged, setIdChanged] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
            .then(function (response) {
                console.log(response.data);
                setPost(response.data);
            });
    },[idChanged]);

    const fetchPost = () => {
        idChanged?setIdChanged(false):setIdChanged(true)
    }

    return (
        <div>
            <p>UseEffect2</p>

            <input 
                type="text" 
                value={postID} 
                onChange={(e)=>{
                    setPostID(e.target.value);
                    console.log(e.target.value)
                }}
            /> <br /> <br />
            <button onClick={fetchPost}>Fetch post </button>

            <li>{post.title}</li>
                


        </div>
    )
}

export default UseEffect3;