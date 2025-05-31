import React from 'react';
// import { Link } from 'react-router-dom';
import Instagram from '../assets/images/instagram.png';
import TikTock from '../assets/images/tiktok.png';
import YouTube from '../assets/images/youtube.png';
import X from '../assets/images/x.png';
import Threads from '../assets/images/threads.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#484848] text-[#ff7f1d] py-5 px-4 sm:px-8">
            {/* Social Media Icons Row */}
            <div className="flex justify-center gap-8 sm:gap-12 mb-4 max-w-lg mx-auto">
                <a
                    href="https://www.instagram.com/fireandwhitepodcast/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={Instagram}
                        alt="Instagram"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 hover:scale-105"
                    />
                </a>
                <a
                    href="https://www.tiktok.com/@fireandwhitepodcast"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={TikTock}
                        alt="TikTok"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 hover:scale-105"
                    />
                </a>
                <a
                    href="https://www.youtube.com/@fireandwhitepodcast"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={YouTube}
                        alt="YouTube"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 hover:scale-105"
                    />
                </a>
                <a
                    href="https://x.com/fireandwhitepod"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={X}
                        alt="X (Twitter)"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 hover:scale-105"
                    />
                </a>
                <a
                    href="https://www.threads.com/@fireandwhitepodcast"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={Threads}
                        alt="Threads"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition duration-300 hover:scale-105"
                    />
                </a>
            </div>


            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center sm:text-left max-w-md mx-auto">
                <p className="text-[#ff7f1d] text-md order-2 sm:order-1">© Fire & White</p>
                <p className="text-md text-white order-1 sm:order-2">
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
