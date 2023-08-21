import React from 'react';
import Home from '../page/Home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Home></Home>

        </div>
    );
};

export default Main;