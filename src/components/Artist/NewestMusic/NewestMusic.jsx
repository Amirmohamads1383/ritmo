import React, { useRef } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import ArtistBox from "../../Common/ArtistBox/ArtistBox";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

export default function NewestMusic({ artists }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader
          title={"آرتیست‌های جدید"}
          arrow={true}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        <Swiper
          slidesPerView={7}
          centeredSlides={false}
          spaceBetween={16}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          id="artist-swiper"
        >
          {artists
            .sort((a, b) => b.age - a.age)
            .slice(0, 12)
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
