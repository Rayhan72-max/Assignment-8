import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';


const Root = (props) => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;