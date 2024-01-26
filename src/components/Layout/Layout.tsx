import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';


const Layout = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {Layout};