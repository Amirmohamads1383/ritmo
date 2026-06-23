import React from "react";
import MusicBox from "../../Common/MusicBox/MusicBox";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TrendMusic({musics}) {
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader title={"آهنگ‌های ترند"} arrow={true} />
        <Swiper slidesPerView={5} spaceBetween={16} className="musicSwiper">
          {musics
            .filter((music) => music.trend === true)
            .map((music) => (
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
