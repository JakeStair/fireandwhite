import React from 'react';
import mainGraphic from '../assets/images/maingraphic2.png'; // Update path
import logo from '../assets/images/fire-logo2.png'; // Your logo with title

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-16 max-w-7xl mx-auto">
      {/* Left side content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        {/* Logo + Coming Soon */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <img src={logo} alt="Fire and White Logo" className="h-30" />
          <span className="text-2xl font-semibold text-gray-800">Coming Soon</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://open.spotify.com/show/5CNtyoJ8vP9plKDmg3jVhv" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Spotify
          </a>
          <a href="https://podcasts.apple.com/us/podcast/fire-white/id1733507614" target="_blank" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            Apple
          </a>
          <a href="https://www.pandora.com/podcast/fire-and-white/PC:1001085627" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-1100">
          Pandora
          </a>
        </div>

        {/* Email */}
        <p className="text-sm text-gray-600">
          Contact: <a href="mailto:admin@fireandwhite.com" className="underline">admin@fireandwhite.com</a>
        </p>
      </div>

      {/* Right side graphic */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <img src={mainGraphic} alt="Fire and White graphic" />
      </div>
    </section>
  );
};

export default HeroSection;
