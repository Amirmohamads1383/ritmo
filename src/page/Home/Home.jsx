import React from "react";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper";
import RitmoPlus from "../../components/RitmoPlus/RitmoPlus"
import TrendPlayList from "../../components/TrendPlayList/TrendPlayList"

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
    </>
  );
}
