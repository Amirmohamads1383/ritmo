import React, { useEffect, useState } from "react";
import ArtistBox from "../../Common/ArtistBox/ArtistBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function ArtistBoxContainer() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/artists.json");
      const data = await response.json();
      setArtists(data);
    };
    fetchData();
  }, []);
  return (
    <Swiper
      centeredSlides={false}
      spaceBetween={16}
      className="homeArtistSwiper"
      navigation={false}
      modules={[Navigation]}
      /* navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }} */
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 7 },
      }}
    >
      {artists.slice(0, 12).map((artist) => (
        <SwiperSlide key={artist.id}>
          <ArtistBox title={artist.name.fa} img={artist.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
