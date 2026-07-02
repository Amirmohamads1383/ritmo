import React, { useEffect, useState } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import MusicBox from "../../Common/MusicBox/MusicBox";

import "swiper/css";

export default function NewMusic({ artistSlug }) {
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/musics.json");
      const data = await response.json();
      const artistMusicFilter = data.filter((music) => music.singer.en === artistSlug,);
      setMusics(artistMusicFilter);
    };
    fetchData();
  }, [artistSlug]);
  return (
    <section>
      <div className="container">
        <div className="py-16">
          <TitleHeader title={"جدید‌ترین‌ها"} arrow={true} />
          <Swiper slidesPerView={7} spaceBetween={16} className="mySwiper">
            {musics.map((music) => (
              <SwiperSlide key={music.id}>
                <MusicBox title={music.title.fa} img={music.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
