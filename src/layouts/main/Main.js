import React from 'react';
import { Outlet } from 'react-router';

import Header from "../navbar/Header"

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />

        </div>
    );
};

export default Main;