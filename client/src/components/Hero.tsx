import React from 'react';
// // import mainGraphic from '../assets/images/maingraphic2.png'; // Update path
// import logo from '../assets/images/fire-logo2.png';
// import desktopImage from '../assets/images/desktop-p.png'
// import mobileImage from '../assets/images/mobile-p.png'
// import Pat from '../assets/images/pat-transparent.png'
import tamika from '../assets/images/tamika-banner.png'
import tamikaDesktop from '../assets/images/tamika-banner-desktop.png'
import { Link } from 'react-router-dom';


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
      <section className="text-white flex flex-col items-center justify-center text-center mt-8 mb-4">
        <h1 className="text-5xl font-bold mb-1">IGNITING STORIES</h1>
        <p>About Legends of Women's Basketball</p>
      </section>

      {/* <section>
        <h1></h1>
      </section> */}

      <section className="flex flex-col items-center justify-between px- mt-0 max-w-7xl mx-auto py-5">

        <div className="flex flex-wrap justify-center gap-3 mt-5 max-w-7xl mx-auto">
          <a
            href="https://open.spotify.com/show/5CNtyoJ8vP9plKDmg3jVhv"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12 "
          >
            Spotify
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/fire-white/id1733507614"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Apple Podcasts
          </a>
          <a
            href="https://www.pandora.com/podcast/fire-and-white/PC:1001085627"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12 max-w-full"
          >
            Pandora
          </a>
          <a
            href="https://music.amazon.com/podcasts/57a4f76c-977b-4330-9dfb-f599a8c8bf31/fire-white"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Amazon Music
          </a>
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            iHeart Radio
          </a>
          <a
            href="https://podcastindex.org/podcast/6810945"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podcast Index
          </a>

          {/* <a
            href="https://www.youtube.com/playlist?list=PLya6yvUQtv3xWhNP9PFiseI3wJqlMwTO8"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            YouTube
          </a> */}

          <a
            href="https://podcastaddict.com/podcast/fire-white/4984011"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podcast Addict
          </a>

          <a
            href="https://www.podchaser.com/podcasts/fire-white-5636456"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podchaser
          </a>

          <a
            href="https://play.pocketcasts.com/podcasts/a9f7f040-b7d3-013c-c515-0aec82e01c75"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Pocket Casts
          </a>

          <a
            href="https://www.deezer.com/us/show/1000716222"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Deezer
          </a>

          <a
            href="https://www.listennotes.com/podcasts/fire-white-fire-white-qVf8La64Zl3/"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Listen Notes
          </a>

          <a
            href="https://player.fm/series/fire-white"
            target="_blank" rel="noopener noreferrer" className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Player FM
          </a>

        </div>
      </section >
      <div className="relative w-full mt-[35px]">

<Link to="/episodes/tamika-catchings-adversity-was-the-blueprint">
  <picture>
    <source
      media="(min-width: 1100px)"
      srcSet={tamikaDesktop}
      // alt="Tamika Catchings Layup - Desktop View"
    />
    <img
      src={tamika}
      alt="Tamika Catchings Layup"
      className="w-full h-auto object-cover"
    />
  </picture>
</Link>

      </div>

      <section className="text-white flex flex-col items-center justify-center text-center mt-0 py-12">
        <h1 className="text-5xl font-bold mb-1">Not Just a Podcast</h1>
        <p className="mx-4 md:mx-auto max-w-lg md:max-w-2xl">It's a celebration of resilience, excellence, and the remarkable women who have shaped the game. Join us as we honor their stories and the profound impact of women in sports.</p>
      </section>

      {/* <section>
        <a href="https://www.buzzsprout.com/admin/2221953/episodes">
          <img
            src={logo}
            alt="Fire & White Logo"
          />
        </a>
      </section> */}

      {/* <p className="text-md text-white mt- mb-[85px]">
          Say Hello! <a href="mailto:admin@fireandwhite.com" className="underline hover:text-orange-400">
            admin@fireandwhite.com
          </a>
        </p> */}

    </div>
  );
};

export default HeroSection;

