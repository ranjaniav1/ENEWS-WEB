"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // core styles
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const NewsSlider = ({ children, slidesToShow = 4 }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={slidesToShow}
      autoplay={{ delay: 5000,disableOnInteraction:false }}
      loop={true}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        1200: { slidesPerView: slidesToShow },
      }}
    >
      {React.Children.map(children, (child, i) => (
        <SwiperSlide key={i}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsSlider;
