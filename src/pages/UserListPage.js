import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function UserListPage(props) {
    const [users, setUsers] = useState([])

    useState(() => {
        async function getUsers() {
            await axios.get("https://dummyjson.com/user")
                .then(resp => setUsers(resp.data.users))
        }

        getUsers()
    }, [])

    return (
        <div>
            <ol>
                {users && users.map(user => <Link key={user.id} to={`${user.id}`}>
                    <li>{user.firstName}</li>
                </Link>)}
            </ol>
        </div>
    );
}

export default UserListPage;