import React from "react";
import MusicBox from "../../Common/MusicBox/MusicBox";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function NewstMusic({ category, musics }) {
  return (
    <section>
      <div className="container">
        <TitleHeader title={`تازه های ${category.title.fa}`} arrow={true} />
        <Swiper
          slidesPerView={7}
          spaceBetween={16}
          className="musicSwiper"
          breakpoints={{
            /* 320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 16,
            }, */
          }}
        >
          {musics.map((music) => (
            <SwiperSlide key={music.id}>
              <MusicBox
                title={music.title.fa}
                singer={music.singer.fa}
                img={music.img}
                id={music.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
