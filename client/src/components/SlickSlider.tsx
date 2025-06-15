import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newComets from '../assets/images/98-comingsoon.png'
import comets from "../assets/images/comets.png";
import tamika from "../assets/images/tamika.png";
import lisa from "../assets/images/lisa.png";
import trailer from "../assets/images/trailer.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';


const CarouselSlider: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    arrows: false,
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

  const links = [
    "/episodes/97-comets-dawn-of-a-dynasty",
    "/episodes/lisa-leslie-above-the-rim",
    "/episodes/tamika-catchings-adversity-was-the-blueprint",
    "/episodes/welcome-to-fire-white",
  ];


  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings}>
        {[comets, lisa, tamika, trailer, newComets].map((img, index) => (
          <div key={index} className="px-2 mt-11 mb-3">
            <Link to={links[index]}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-scale-down rounded-lg border-2 border-gray-500 shadow-lg transition duration-300 hover:scale-105"
              />
            </Link>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center mt-0 space-x-8">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="text-white rounded-full shadow-dark p-2 px-4"
          aria-label="Previous Slide"
        >
          {React.createElement(FaChevronLeft as React.ElementType, { size: 16 })}        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="text-white rounded-full shadow-dark p-2 px-4"
          aria-label="Next Slide"
        >
          {React.createElement(FaChevronRight as React.ElementType, { size: 16 })}        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
