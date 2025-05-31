import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SideNav from './SideNav';
import AnnouncementBar from './AnnouncementBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <AnnouncementBar />
      <SideNav isNavOpen={false} setIsNavOpen={function (open: boolean): void {
        throw new Error('Function not implemented.');
      } } /> 
      <Navbar /> 
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
