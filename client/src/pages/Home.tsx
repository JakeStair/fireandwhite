import React from 'react';
import HeroSection from '../components/Hero'
// import Carousel from '../components/Carousel'
// import ErrorBoundary from '../components/ErrorBoundary'
import CarouselSlider from '../components/SlickSlider'
import logo from '../assets/images/fire-logo2.png';

import { useEffect, useState } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading screen (replace with real loading logic if needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#4f4f4f]">
        <div className="text-white text-3xl animate-pulse">
            <img src={logo} alt="Fire and White Logo" className="w-auto h-[150px]" />
        </div>
      </div>
    );
  }


    return (
        <div className="bg-[#4f4f4f]">
            {/* <h1>Latest Episodes</h1> */}
            {/* <ErrorBoundary>
                <Carousel />
            </ErrorBoundary> */}
            <CarouselSlider />
            <HeroSection />
        </div>
    );

}

export default Home;