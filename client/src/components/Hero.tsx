import React from 'react';
// import mainGraphic from '../assets/images/maingraphic2.png'; // Update path
// import logo from '../assets/images/fire-logo2.png'; // Your logo with title
// import desktopImage from '../assets/images/desktop-p.png'
// import mobileImage from '../assets/images/mobile-p.png'


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

      <section className="flex flex-col items-center justify-between px-6 mt-0 max-w-7xl mx-auto">

        <div className="flex flex-wrap justify-center gap-3 mt-5 max-w-7xl mx-auto">
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12 "
          >
            Spotify
          </a>
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Apple Podcasts
          </a>
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12 max-w-full"
          >
            Pandora
          </a>
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Amazon Music
          </a>
          <a
            href="https://www.iheart.com/podcast/269-fire-white-154929696/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            iHeart Radio
          </a>
          <a
            href="https://podcastindex.org/podcast/6810945"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podcast Index
          </a>

          <a
            href="https://www.youtube.com/channel/UCKqUybNv3LEeorBOrkV2rMQ"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            YouTube
          </a>

          <a
            href="https://podcastaddict.com/podcast/fire-white/4984011"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podcast Addict
          </a>

          <a
            href="https://www.podchaser.com/podcasts/fire-white-5636456"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Podchaser
          </a>

          <a
            href="https://play.pocketcasts.com/podcasts/a9f7f040-b7d3-013c-c515-0aec82e01c75"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Pocket Casts
          </a>

          <a
            href="https://www.deezer.com/us/show/1000716222"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Deezer
          </a>

          <a
            href="https://www.listennotes.com/podcasts/fire-white-fire-white-qVf8La64Zl3/"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Listen Notes
          </a>

          {/* <a
            href="https://player.fm/series/fire-white"
            className="bg-[#5e5e5e] text-white px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white whitespace-nowrap flex items-center justify-center h-12"
          >
            Player FM
          </a> */}

        </div>


        <p className="text-md text-white mt-5 mb-5">
          Say Hello! <a href="mailto:admin@fireandwhite.com" className="underline hover:text-orange-400">
            admin@fireandwhite.com
          </a>
        </p>

      </section >
    </div>
  );
};

export default HeroSection;

