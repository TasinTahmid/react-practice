import React from 'react';
import { useState } from 'react';

const UseStateObject = () => {
    const [name, setName] = useState({firstName: '', lastName: ''});

    return (
        <div>
            <h1> Welcome in React </h1>
            
            <form>
                <input 
                type="text" 
                value={name.firstName} 
                onChange={e => setName({...name, firstName: e.target.value})}
                />
                <input 
                type="text" 
                value={name.lastName} 
                onChange={e => setName({...name, lastName: e.target.value})}
                />
                <h2>Your First Name: {name.firstName}</h2>
                <h2>Your Last Name: {name.lastName}</h2>
            </form>
        </div>
    )
}

export default UseStateObject;