import React, { useEffect, useRef, useState } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function Albums({ artistSlug }) {
  const [albums, setAlbums] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/albums.json");
      const data = await response.json();
      const artistAlbumsFilter = data.filter(
        (album) => album.singer.en === artistSlug,
      );
      setAlbums(artistAlbumsFilter);
    };
    fetchData();
  }, [artistSlug]);
  return (
    <section>
      <div className="container">
        <div>
          <TitleHeader
            title={"آلبوم‌ها"}
            arrow={true}
            prevRef={prevRef}
            nextRef={nextRef}
          />
          <Swiper
            slidesPerView={7}
            spaceBetween={16}
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {albums.map((album) => (
              <SwiperSlide key={album.id}>
                <AlbumsBox
                  name={album.name.fa}
                  img={album.img}
                  nameEn={album.name.en}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
