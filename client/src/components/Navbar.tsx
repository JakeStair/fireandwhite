import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import wordMark from '../assets/images/wordmark.png';

const Navbar = () => {
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <nav>
            <Link to="/">
                <img src={wordMark} alt="Fire and White" />
            </Link>
            <div>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/signup">
                    Sign Up
                </Link>
                <button
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;