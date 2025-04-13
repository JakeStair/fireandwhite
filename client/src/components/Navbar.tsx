import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wordMark from '../assets/images/wordmark.png';


const CustomNavbar: React.FC = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const logout = () => {

    //   Auth.logout();
    //   setIsOpen(false);
    // };

    return (

        <nav className="bg-white shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
                {/* Word Mark as Logo */}
                {/* <Link to="/" className="flex items-center">
          <img src={wordMark} alt="Fire and White" height="40" />
        </Link> */}

                {/* Navbar Links */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="">
                        <img
                            src={wordMark}
                            alt="Fire and White"
                            className="h-7 w-auto"
                        />
                    </Link>

                    <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                    <Link to="/signup" className="text-gray-700 hover:text-blue-600">Sign Up</Link>
                    {/* <a href="mailto:admin@fireandwhite.com" className="text-gray-700 hover:text-blue-600">admin@fireandwhite.com</a> */}
                    <Link to="/Episodes" className="text-gray-700 hover:text-blue-600">Episodes</Link>
                    <Link to="/Blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default CustomNavbar;
