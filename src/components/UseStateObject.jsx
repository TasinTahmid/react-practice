import { useState } from "react";
// import axios from "axios";

const UseStateObject = () => {
    const [name, setName] = useState({ firstName: "", lastName: "" });
    const [users, setUsers] = useState([]);
    const [toggleList, setToggleList] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setToggleList(!toggleList);
        //     const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        //     setUsers(response.data);
    };

    return (
        <div>
            <h1> Welcome in React </h1>

            <form>
                <input
                    data-testid="firstName"
                    type="text"
                    value={name.firstName}
                    onChange={(e) => setName({ ...name, firstName: e.target.value })}
                />
                <input
                    data-testid="lastName"
                    type="text"
                    value={name.lastName}
                    onChange={(e) => setName({ ...name, lastName: e.target.value })}
                />
                <h2>Your First Name: {name.firstName}</h2>
                <h2>Your Last Name: {name.lastName}</h2>

                <button
                    type="submit"
                    onClick={(e) => {
                        handleSubmit(e);
                    }}
                >
                    Submit
                </button>
            </form>

            {/* {users.length > 0 &&
                toggleList &&
                users.map((user) => (
                    <div key={user.id} className="user">
                        <p>id: {user.id}</p>
                        <p>name: {user.name}</p>
                        <p>username: {user.username}</p>
                        <p>email: {user.email}</p>
                    </div>
                ))} */}
            {toggleList && <div>button clicked...</div>}
        </div>
    );
};

export default UseStateObject;
