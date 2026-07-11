import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";
import { Navigation } from "swiper/modules";
export default function TrendAlbums({ albums }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader
          title={"آلبوم‌های ترند"}
          arrow={true}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        <Swiper
          slidesPerView={7}
          spaceBetween={16}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
        >
          {albums
            .filter((album) => album.trend == true)
            .map((album) => (
              <SwiperSlide key={album.id}>
                <AlbumsBox
                  name={album.name.fa}
                  img={album.img}
                  singer={album.singer.fa}
                  nameEn={album.name.en}
                  singerEn={album.singer.en}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
