import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';


const Layout = () => {
    return (
        <div>
            <AnnouncementBar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;