import React from 'react';
// import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#484848] text-[#ff7f1d] py-5">
            <div className="flex items-center justify-center gap-12 px-4">
                <p className="text-[#ff7f1d] text-md">© Fire & White</p>
                <p className="text-md text-white">
                    Say Hello! <a href="mailto:admin@fireandwhite.com" className="underline hover:text-orange-400">
                        admin@fireandwhite.com
                    </a>
                </p>
            </div>
        </footer>

    );
};

export default Footer;

