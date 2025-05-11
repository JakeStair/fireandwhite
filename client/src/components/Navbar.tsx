import React from 'react';
import { Link } from 'react-router-dom';
// import wordMark from '../assets/images/wordmark.png';
import logo from '../assets/images/header-image.png'


const CustomNavbar: React.FC = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const logout = () => {

    //   Auth.logout();
    //   setIsOpen(false);
    // };

    return (

        <nav className="bg-[#484848] shadow-lg min-h[120px">
                {/* Navbar Links */}
                <div className="max-w-screen-xl mx-auto px-4 py-1 flex justify-center">
                    <Link to="/" className="block">
                        <img
                            src={logo}
                            alt="Fire and White"
                            className="h-[100px] w-auto"
                        />
                    </Link>

                    {/* <a href="mailto:admin@fireandwhite.com" className="text-gray-700 hover:text-blue-600">admin@fireandwhite.com</a> */}
                    {/* <Link to="/Episodes" className="text-gray-900 hover:text-orange-500">Episodes</Link>
                    <Link to="/Blog" className="text-gray-200 hover:text-orange-500">Blog</Link>
                    <Link to="/login" className="text-gray-200 hover:text-orange-500">Login</Link>
                    <Link to="/signup" className="text-gray-200 hover:text-orange-500">Sign Up</Link> */}
                </div>

                {/* <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div> */}
        </nav>
    );
}

export default CustomNavbar;
