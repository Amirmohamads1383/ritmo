import React from "react";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper";
import RitmoPlus from "../../components/RitmoPlus/RitmoPlus"
import TrendPlayList from "../../components/TrendPlayList/TrendPlayList"
import ArtistBoxContainer from "../../components/ArtistBoxContainer/ArtistBoxContainer"

export default function Home() {
  return (
    <>
      <section className="my-16">
        <div className="container">
          <TitleHeader title={"آهنگ‌های ترند"} button={true} arrow={false} />
          <HeroSwiper />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex items-center gap-10">
            <RitmoPlus />
            <TrendPlayList />
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="container">
          <TitleHeader title={"خواننده ترند"} button={true} arrow={true} />
          <ArtistBoxContainer />
        </div>
      </section>
    </>
  );
}
