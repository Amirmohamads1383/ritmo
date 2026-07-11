import React, { useRef } from "react";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function NewestAlbums({ albums }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section>
      <div className="container">
        <TitleHeader
          title={"اخیرا منتشر شده"}
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
            .sort((a, b) => b.date - a.date)
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
