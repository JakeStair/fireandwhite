import React from 'react';
// import { Link } from 'react-router-dom';
import Instagram from '../assets/images/instagram.png';
import TikTock from '../assets/images/tiktok.png';
import YouTube from '../assets/images/youtube.png';
import X from '../assets/images/x.png';
import Threads from '../assets/images/threads.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#484848] text-[#ff7f1d] py-5">
            {/* Social Media Icons Row */}
            <div className="flex justify-center gap-12 mb-4">
                <a href="https://www.instagram.com/fireandwhitepodcast/" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Instagram" className="w-12 h-12 object-contain transition duration-300 hover:scale-105" />
                </a>
                <a href="https://www.tiktok.com/@fireandwhitepodcast" target="_blank" rel="noopener noreferrer">
                    <img src={TikTock} alt="TikTok" className="w-12 h-12  object-contain transition duration-300 hover:scale-105" />
                </a>
                <a href="https://www.youtube.com/@fireandwhitepodcast" target="_blank" rel="noopener noreferrer">
                    <img src={YouTube} alt="YouTube" className="w-12 h-12  object-contain transition duration-300 hover:scale-105" />
                </a>
                <a href="https://x.com/fireandwhitepod" target="_blank" rel="noopener noreferrer">
                    <img src={X} alt="X (Twitter)" className="w-12 h-12  object-contain transition duration-300 hover:scale-105" />
                </a>
                <a href="https://www.threads.com/@fireandwhitepodcast" target="_blank" rel="noopener noreferrer">
                    <img src={Threads} alt="Threads" className="w-12 h-12  object-contain transition duration-300 hover:scale-105" />
                </a>
            </div>

            {/* Copyright and Email */}
            <div className="flex items-center justify-center gap-10">
                <p className="text-[#ff7f1d] text-md">© Fire & White</p>
                <p className="text-md text-white">
                    Say Hello!{' '}
                    <a
                        href="mailto:admin@fireandwhite.com"
                        className="underline hover:text-orange-400"
                    >
                        admin@fireandwhite.com
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
