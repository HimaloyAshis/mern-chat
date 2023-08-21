import React from 'react';
import Home from '../page/Home/Home';
import { Outlet } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return (
        <div className='min'>
            <Outlet></Outlet>
            <Home></Home>

        </div>
    );
};

export default Main;