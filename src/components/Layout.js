import React from 'react';
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <header><h1>user checker</h1></header>
            <Outlet />
            <footer><h2>m5-hw3</h2></footer>
        </div>
    );
}

export default Layout;
