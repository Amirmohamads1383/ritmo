import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";

export default function TrendAlbums({albums}) {
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader title={"آلبوم‌های ترند"} arrow={true} />
        <Swiper slidesPerView={7} spaceBetween={16}>
          {albums
            .filter((album) => album.trend == true)
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
