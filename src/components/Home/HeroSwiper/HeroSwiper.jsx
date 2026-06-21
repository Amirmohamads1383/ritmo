import React from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import HeroSwiperCard from "../HeroSwiperCard/HeroSwiperCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function HeroSwiper() {
  return (
    <section className="my-16">
      <div className="container">
        <TitleHeader title={"آهنگ‌های ترند"} button={true} arrow={false} />
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
      </div>
    </section>
  );
}
