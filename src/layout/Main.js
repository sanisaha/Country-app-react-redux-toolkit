import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';


const Main = () => {

    return (
        <div>
            {/* here we are using outlet to render the child components of main component, outlet is used to render the child components of parent component */}
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;