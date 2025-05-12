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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: "20px",
  };

  return (
    <Slider {...settings}>
      <div className="px-4">
        <div className="aspect-w-4 aspect-h-3">
          <img
            src={comets}
            alt="'97 Comets"
            className="w-full h-64 object-cover rounded-lg border-2 border-gray-500 shadow-lg"
          />
        </div>
      </div>
      <div className="px-4">
        <img
          src={lisa}
          alt="Lisa Leslie"
          className="w-full h-64 object-cover rounded-lg border-2 border-gray-500 shadow-lg"
        />
      </div >
      <div className="px-4">
        <img
          src={tamika}
          alt="Tamika Catchings"
          className="w-full h-64 object-cover rounded-lg border-2 border-gray-500 shadow-lg"
        />
      </div>
      <div className="px-4">
        <img
          src={trailer}
          alt="Trailer"
          className="w-full h-64 object-cover rounded-lg border-2 border-gray-500 shadow-lg"
        />
      </div>
    </Slider>
  );
};

export default CarouselSlider;