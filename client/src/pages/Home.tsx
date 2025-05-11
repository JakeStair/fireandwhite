import React from 'react';
import HeroSection from '../components/Hero'
// import Carousel from '../components/Carousel'
// import ErrorBoundary from '../components/ErrorBoundary'


const Home = () => {
    return (
        <div className="bg-[#313131]">
            {/* <ErrorBoundary>
                <Carousel />
            </ErrorBoundary> */}

            <HeroSection />
        </div>
    );
};

export default Home;