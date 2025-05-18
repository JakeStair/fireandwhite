import React from 'react';
import { Link } from 'react-router-dom';
// import wordMark from '../assets/images/wordmark.png';
// import logo from '../assets/images/fire-logo2.png'
// import wordMark from '../assets/images/wordmark.png'
import logo2 from '../assets/images/navbar-graphic-b.png'


const CustomNavbar: React.FC = () => {

    // const [isOpen, setIsOpen] = useState(false);
    // const logout = () => {

    //   Auth.logout();
    //   setIsOpen(false);
    // };

    return (

        <nav className="bg-[#484848] shadow-lg py-2">
            {/* Navbar Links */}
            <div className="flex justify-center items-center w-full">
                <Link to="/" className="">
                    <img
                        src={logo2}
                        alt="Fire and White"
                        className="h-[32px] flex justify-center"
                    />
                </Link>

                {/* <a href="mailto:admin@fireandwhite.com" className="text-gray-700 hover:text-blue-600">admin@fireandwhite.com</a> */}
                {/* <Link to="/Episodes" className="text-gray-900 hover:text-orange-500">Episodes</Link>
                    <Link to="/Blog" className="text-gray-200 hover:text-orange-500">Blog</Link>
                    <Link to="/login" className="text-gray-200 hover:text-orange-500">Login</Link>
                    <Link to="/signup" className="text-gray-200 hover:text-orange-500">Sign Up</Link> */}
            </div>

            {/* <div className="ml-8">
                    <button className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div> */}
        </nav>
    );
}

export default CustomNavbar;
