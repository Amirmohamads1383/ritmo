import React, { useEffect, useState } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";

import "swiper/css";

export default function Albums({ artistSlug }) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/albums.json");
      const data = await response.json();
      const artistAlbumsFilter = data.filter((album) => album.singer.en === artistSlug);
      setAlbums(artistAlbumsFilter);
    };
    fetchData();
  }, [artistSlug]);
  return (
    <section>
      <div className="container">
        <div>
          <TitleHeader title={"آلبوم‌ها"} arrow={true} />
          <Swiper slidesPerView={7} spaceBetween={16} className="mySwiper">
            {albums.map((album) => (
              <SwiperSlide key={album.id}>
                <AlbumsBox name={album.name.fa} img={album.img} nameEn={album.name.en}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
