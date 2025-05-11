import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import desktopImage from '../assets/images/desktop-p.png'
import mobileImage from '../assets/images/mobile-p.png'


// const slides = [
//     {
//         title: 'Dawn of a Dynasty',
//         image: '/assets/images/desktop-carousel-97-comets-a.jpg',
//     },
//     {
//         title: 'Lisa Leslie',
//         image: '/assets/images/lisalesliecarousel.jpg'
//     },
//     {
//         title: 'Tamika Catchings',
//         image: '/assets/images/tamikacatchingscarousel.jpg',
//     },
//     {
//         title: 'Fire and White Trailer',
//         image: '/assets/images/fireandwhitetrailercarousel.jpg',
//     }
// ]

export default function Carousel() {
    return (
        
        <Swiper
            // modules={[Autoplay, Pagination]}
            // autoplay={{ delay: 4000 }}
            // pagination={{ clickable: true }}
            // loop={true}
            // slidesPerView={1}
            className="rounded-2xl overflow-hidden"
        >
            <SwiperSlide>
                <picture>
                    <source
                    media="(min-width: 1024px)"
                    src={desktopImage}
                    />
                    <img 
                    src={mobileImage}
                    alt="Slide"
                    className="w-full h-full object-cover"
                    />
                </picture>
            </SwiperSlide>
        </Swiper>
    )
}

