import React from 'react';
import HeroSection from '../components/Hero'
// import Carousel from '../components/Carousel'
// import ErrorBoundary from '../components/ErrorBoundary'
import CarouselSlider from '../components/SlickSlider'


const Home = () => {
    return (
        <div className="bg-[#4f4f4f]">
            {/* <ErrorBoundary>
                <Carousel />
            </ErrorBoundary> */}
            <CarouselSlider />
            <HeroSection />
        </div>
    );
};

export default Home;