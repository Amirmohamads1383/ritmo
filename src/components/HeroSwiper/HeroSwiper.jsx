import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";

export default function HeroSwiper() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        initialSlide={3}
        className="heroSwiper"
      >
        <SwiperSlide>
          <HeroSwiperCard img={"images/bimanteq2-800x800-1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperCard img={"images/moo-be-moo-reza-bahram.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperCard img={"images/moo-be-moo-reza-bahram.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperCard img={"images/bimanteq2-800x800-1.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperCard img={"images/moo-be-moo-reza-bahram.jpg"} />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSwiperCard img={"images/bimanteq2-800x800-1.jpg"} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
