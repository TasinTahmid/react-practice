import React from 'react';
import { useState } from 'react';

const UploadImage = () => {
    const [items, setItems] = useState([]);
    const [oneItem, setOneItem] = useState('');

    const addItems = (item) => {
        console.log(item)
        setItems([...items, item]);
    }
    return (
        <div><br /><br />
            <input 
                type="file" 
                value={oneItem} 
                onChange={(e)=>{
                    setOneItem(e.target.value);
                }}
            /> <br /> <br />
            <button type="submit" onClick={()=>addItems(oneItem)}>Upload</button>
            
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default UploadImage;