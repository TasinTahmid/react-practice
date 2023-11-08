import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/image-1.webp";
import img2 from "../assets/image-2.webp";
import img3 from "../assets/image-3.webp";
import img4 from "../assets/image-4.webp";
import img5 from "../assets/image-5.webp";
import img6 from "../assets/image-6.webp";

let list = [img1, img2, img3, img4, img5, img6];

const UploadImage = () => {
    const [items, setItems] = useState([]);
    const [isChanged, setIsChanged] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);
    const checkboxRef = useRef();

    const addItems = (item) => {
        setItems([...items, item]);
    }
    const deleteFirst = () => {
        list = list.filter((item) => !selectedItems.includes(item));
        setSelectedItems([]);
        setIsChecked(false);
        setIsChanged(isChanged? false: true);
    }

    const handleCheckboxChange = (item) =>{
        setIsChecked(isChecked? false: true);
        setSelectedItems([...selectedItems, item]);
    }

    useEffect(() => {
        setItems(list);
    },[isChanged]);

    return (
        <div><br /> <br />
            {/* <input 
                type="file" 
                value={oneItem} 
                onChange={(e)=>{
                    setOneItem(e.target.value);
                }}
            /> <br /> <br />
            <button type="submit" onClick={()=>addItems(oneItem)}>Upload</button> */}
            <button onClick={deleteFirst}>Delete first image</button>
            
            <ul>
                
                {(items.map((item, index) => (
                    <li key={index}>
                        <input key={item}
                            ref={checkboxRef}
                            type="checkbox"
                            value={isChecked}
                            // checked={false}
                            onChange={()=>handleCheckboxChange(item)}
                        />
                        <img src={item} alt="image" className="img"/>
                    </li>
                )))
                }

            </ul>

        </div>
    )
}

export default UploadImage;