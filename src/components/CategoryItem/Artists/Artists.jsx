import React from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ArtistBox from "../../Common/ArtistBox/ArtistBox";
export default function Artists({ artists, category }) {
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader
          title={`خوانندگان ${category.title.fa}`}
          arrow={true}
          button={false}
        />
        <Swiper
          slidesPerView={7}
          spaceBetween={16}
          className="artistSwiper"
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 16,
            },
          }}
        >
          {artists.map((artist) => (
            <SwiperSlide key={artist.id}>
              <ArtistBox
                title={artist.name.fa}
                img={artist.img}
                id={artist.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
