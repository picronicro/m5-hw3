import React, {useEffect} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import Layout from "./components/Layout";
import UserListPage from "./pages/UserListPage";
import UserProfilePage from "./pages/UserProfilePage";

function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/users" element={<Layout />}>
                    <Route index element={<UserListPage />} />
                    <Route path="/users/:id" element={<UserProfilePage />} />
                </Route>
                <Route path="*" element={<div>
                    <h1>404</h1>
                    <h2>you may need to navigate to {<Link to="/users">/users</Link>} by yourself</h2>
                </div>} />
            </Routes>
        </div>
    );
}

export default App;