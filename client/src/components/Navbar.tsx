// components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import SideNav from './SideNav';
import logo2 from '../assets/images/navbar-graphic-b.png';

const CustomNavbar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#484848] shadow-lg py-2 relative">
        <div className="flex justify-center items-center w-full relative">
          <Link to="/" className="">
            <img
              src={logo2}
              alt="Fire and White"
              className="h-[32px]"
            />
          </Link>

          {/* Hamburger icon - positioned to the left */}
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setIsNavOpen(true)}
            role="button"
            aria-label="Open Navigation"
          >
            <FaBars size={26} color="#EADDDD" />
          </div>
        </div>
      </nav>

      <SideNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default CustomNavbar;
