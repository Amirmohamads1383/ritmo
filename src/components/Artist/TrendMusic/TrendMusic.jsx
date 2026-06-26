import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ArtistBox from "../../Common/ArtistBox/ArtistBox";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";

export default function TrendMusic({artists}) {
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader title={"خواننده ترند"} arrow={true} />
        <Swiper
          slidesPerView={7}
          centeredSlides={false}
          spaceBetween={16}
          id="artist-swiper"
        >
          {artists
            .filter((artist) => artist.trend === true)
            .map((artist) => (
              <SwiperSlide key={artist.id}>
                <ArtistBox
                  title={artist.name.fa}
                  img={artist.img}
                  nameEn={artist.name.en}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}
