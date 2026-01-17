import React from 'react';
import './movieSwiper.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

function MovieSwiper({ slides, slideChange }) {
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            loop={true}
            modules={[Autoplay, EffectCoverflow]}
            className="movieSwiper"
        >
            {/* {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <img
                        src={slide.preview_img}
                        alt="Preview Image"
                        onClick={() => slideChange(slide.id)}
                    />
                </SwiperSlide>
            ))} */}

            {slides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                    <img
                        src={slide.preview_img}
                        alt={slide.title}
                        onClick={() => slideChange(index)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default MovieSwiper;
