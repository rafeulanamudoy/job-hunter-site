import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Header from "../navbar/Header"

const DashBoard = () => {
    return (
        <div>
            <Header></Header>
            <Sidebar></Sidebar>

            <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;