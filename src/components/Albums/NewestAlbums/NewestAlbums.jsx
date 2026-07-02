import React from "react";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function NewestAlbums({albums}) {
  return (
    <section>
      <div className="container">
        <TitleHeader title={"اخیرا منتشر شده"} arrow={true} />
        <Swiper slidesPerView={7} spaceBetween={16}>
          {albums
            .sort((a, b) => b.date - a.date)
            .map((album) => (
              <SwiperSlide key={album.id}>
                <AlbumsBox
                  name={album.name.fa}
                  img={album.img}
                  singer={album.singer.fa}
                  nameEn={album.name.en}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
