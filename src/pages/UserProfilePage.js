import React, {useEffect, useState} from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import axios from "axios";

function UserProfilePage(props) {
    const {id} = useParams()
    const [user, setUser] = useState({})
    const [posts, setPosts] = useState([])
    const [currentTab, setCurrentTab] = useSearchParams()

    useEffect(() => {
        async function getProfile() {
            await axios.get(`https://dummyjson.com/users/${id}`)
                .then(resp => setUser(resp.data))
        }

        getProfile()
    }, [])

    async function showPosts() {
        setCurrentTab({tab: "posts"})
        await axios.get(`https://dummyjson.com/users/${id}/posts`)
            .then(resp => setPosts(resp.data.posts))
    }

    async function showTodos() {
        setCurrentTab({tab: "todos"})
        await axios.get(`https://dummyjson.com/users/${id}/todos`)
            .then(resp => setPosts(resp.data.todos))
    }

    return (
        <div>
            <div className="user_data">
                <p>name: {user.firstName}</p>
                <p>surname: {user.lastName}</p>
                <p>age: {user.age}</p>
                <p>email: {user.email}</p>
            </div>
            <div className="btns">
                <button onClick={showPosts}>get posts</button>
                <button onClick={showTodos}>get todos</button>
            </div>
            <div className="posts">
                <ol>
                    {posts && posts.map(post => <li key={post.id}>{currentTab.get("tab") === "posts" ? post.title : post.todo}</li>)}
                </ol>
            </div>
        </div>
    );
}

export default UserProfilePage;