import React from 'react';
// import mainGraphic from '../assets/images/maingraphic2.png'; // Update path
import logo from '../assets/images/fire-logo2.png';
// import desktopImage from '../assets/images/desktop-p.png'
// import mobileImage from '../assets/images/mobile-p.png'
import Pat from '../assets/images/pat-transparent.png'
import tamika from '../assets/images/tamika-banner.png'


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

      <section className="flex flex-col items-center justify-between px- mt-0 max-w-7xl mx-auto">

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
      <div className="relative w-full mt-[55px]">
        <a href="https://www.buzzsprout.com/admin/2221953/episodes/14897211-tamika-catchings">
          <img
            src={tamika}
            alt="Tamika Catchings Layup"
            className="w-full h-auto object-cover"
          />
        </a>
        {/* <p className="
    absolute 
    top-1/2 
    -translate-y-1/2 
    left-4 
    md:left-16 
    text-white 
    text-center 
    max-w-md 
    px-4 
    text-4xl 
    md:text-5xl 
    leading-tight
  ">
    Adversity wasn’t the end. <br />It was the blueprint.”
  </p> */}
      </div>


      {/* <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-12 px-6 md:px-12">
          <div className="text-white md:w-1/2 text-center md:text-left">
            <p className="text-lg mb-4">
              “Well, it can’t get any worse; you can still win this game. Take it one possession at a time. I’ll tell you this much: if we’re going down, we’re going down fighting.”
            </p>
            <a
              href="https://fireandwhitepodcast.buzzsprout.com/2221953/episodes/14897211-tamika-catchings"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Hear More!
            </a>
          </div>
          <div className="md:w-1/2 w-full flex justify-center md:mb-0 -ml-4 sm:-ml-[90px] md:ml-0">
            <img
              src={Pat}
              alt="Pat Summitt"
              className="w-full max-w-[300px] md:max-w-none md:h-[400px] object-contain"
            />

          </div>
        </div> */}

      <section className="text-white flex flex-col items-center justify-center text-center mt-12 mb-4">
        <h1 className="text-5xl font-bold mb-1">Not Just a Podcast</h1>
        <p className="mx-12">It's a celebration of resilience, excellence, and the remarkable women who have shaped the game. Join us as we honor their stories and the profound impact of women in sports.</p>
      </section>

      <section>
        <a href="https://www.buzzsprout.com/admin/2221953/episodes">
          <img
            src={logo}
            alt="Fire & White Logo"
          />
        </a>
      </section>

      {/* <p className="text-md text-white mt- mb-[85px]">
          Say Hello! <a href="mailto:admin@fireandwhite.com" className="underline hover:text-orange-400">
            admin@fireandwhite.com
          </a>
        </p> */}

    </div>
  );
};

export default HeroSection;

