import React from 'react';
import mainGraphic from '../assets/images/maingraphic2.png'; // Update path
import logo from '../assets/images/fire-logo2.png'; // Your logo with title
import desktopImage from '../assets/images/desktop-p.png'
import mobileImage from '../assets/images/mobile-p.png'


const HeroSection = () => {
  return (
    <div>


      {/* <section className='flex flex-col px-4'>
    <picture className='mt-8'>

      <source media="(min-width: 720px)" srcSet={desktopImage} />

      <img 
        className='w-full h-auto rounded-2xl' 
        src={mobileImage}
        alt="Responsive Image"
      />
    </picture>
  </section> */}
      <section className="text-white flex flex-col items-center justify-center text-center mt-20 mb-4">
        <h1 className="text-5xl font-bold mb-1">IGNITING STORIES</h1>
        <p>About Legends of Women's Basketball</p>
      </section>


      <section className="flex flex-col items-center justify-between px-6 mt-0 max-w-7xl mx-auto">

        <div className="flex justify-center space-x-4 mt-5">
          <a href="https://open.spotify.com/show/5CNtyoJ8vP9plKDmg3jVhv" target="_blank" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white">
            Spotify
          </a>
          <a href="https://podcasts.apple.com/us/podcast/fire-white/id1733507614" target="_blank" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white">
            Apple
          </a>
          <a href="https://www.pandora.com/podcast/fire-and-white/PC:1001085627" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white">
            Pandora
          </a>
          <a href="https://music.amazon.com/podcasts/57a4f76c-977b-4330-9dfb-f599a8c8bf31/fire-white" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white">
            Amazon Music
          </a>
          <a href="https://www.iheart.com/podcast/269-fire-white-154929696/" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white">
            iHeart Radio
          </a>
        </div>


        <p className="text-sm text-white mt-5 mb-5">
          Say Hello! <a href="mailto:admin@fireandwhite.com" className="underline hover:text-orange-400">
            admin@fireandwhite.com
          </a>
        </p>

      </section >
    </div>
  );
};

export default HeroSection;

