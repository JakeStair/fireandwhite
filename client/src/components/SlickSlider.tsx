import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import comets from "../assets/images/comets.png";
import tamika from "../assets/images/tamika.png";
import lisa from "../assets/images/lisa.png";
import trailer from '../assets/images/trailer.png'


declare module "*.png";

const CarouselSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    swipe: true,
    touchMove: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <Slider {...settings} className="">
      <div className="px-4 mt-8">
        <div className="aspect-w-4 aspect-h-3">
          <a href="https://fireandwhitepodcast.buzzsprout.com/2221953/episodes/17052500-97-comets-dawn-of-a-dynasty" target="_blank" rel="noopener noreferrer">
            <img
              src={comets}
              alt="'97 Comets"
              className="w-full h-full object-contain rounded-lg border-2 border-gray-500 shadow-lg transform transition duration-300 hover:scale-105"
            />
          </a>
        </div>
      </div>
      <div className="px-4 mt-8">
        <a href="https://fireandwhitepodcast.buzzsprout.com/2221953/episodes/15524368-lisa-leslie" target="_blank" rel="noopener noreferrer">
          <img
            src={lisa}
            alt="Lisa Leslie"
            className="w-full h-full object-contain rounded-lg border-2 border-gray-500 shadow-lg transition duration-300 hover:scale-105"
          />
        </a>
      </div >
      <div className="px-4 mt-8">
        <a href="https://fireandwhitepodcast.buzzsprout.com/2221953/episodes/14897211-tamika-catchings" target="_blank" rel="noopener noreferrer">
          <img
            src={tamika}
            alt="Tamika Catchings"
            className="w-full h-full object-contain rounded-lg border-2 border-gray-500 shadow-lg transition duration-300 hover:scale-105"
          />
        </a>
      </div>
      <div className="px-4 mt-8">
        <a href="https://fireandwhitepodcast.buzzsprout.com/2221953/episodes/14637220-welcome-to-fire-white" target="_blank" rel="noopener noreferrer">
          <img
            src={trailer}
            alt="Trailer"
            className="w-full h-full object-contain rounded-lg border-2 border-gray-500 shadow-lg transition duration-300 hover:scale-105"
          />
        </a>
      </div>
    </Slider>
  );
};

export default CarouselSlider;

