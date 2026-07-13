import React, { useEffect, useRef, useState } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import MusicBox from "../../Common/MusicBox/MusicBox";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function NewMusic({ artistSlug }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [musics, setMusics] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/musics.json");
      const data = await response.json();
      const artistMusicFilter = data.filter(
        (music) => music.singer.en === artistSlug,
      );
      setMusics(artistMusicFilter);
    };
    fetchData();
  }, [artistSlug]);
  return (
    <section>
      <div className="container">
        <div className="py-16">
          <TitleHeader
            title={"جدید‌ترین‌ها"}
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
            {musics.map((music) => (
              <SwiperSlide key={music.id}>
                <MusicBox title={music.title.fa} img={music.img} id={music.id}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
