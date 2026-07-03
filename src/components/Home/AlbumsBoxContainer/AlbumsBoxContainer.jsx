import React, { useEffect, useState } from "react";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function AlbumsBoxContainer() {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/albums.json");
      const data = await response.json();
      setAlbums(data);
    };
    fetchData()
  }, []);

  return (
    <Swiper
      spaceBetween={16}
      className="homeAlbumsSwiper"
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
        1024: { slidesPerView: 7 },
      }}
    >
      {albums.map((album) => (
        <SwiperSlide key={album.id}>
          <AlbumsBox name={album.name.fa} img={album.img} singer={album.singer.fa} nameEn={album.name.en}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
