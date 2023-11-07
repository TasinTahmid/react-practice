import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const UseEffect1 = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function (response) {
                console.log(response.data);
                setPosts(response.data);
            });
    },[]);

    return (
        <div>
            <p>UseEffect1</p>

            <ol>
                {posts.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))
                }
            </ol>


        </div>
    )
}

export default UseEffect1;