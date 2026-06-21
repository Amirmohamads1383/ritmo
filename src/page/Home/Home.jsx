import React from "react";
import HeroSwiper from "../../components/Home/HeroSwiper/HeroSwiper";
import RitmoBanner from "../../components/Home/RitmoBanner.jsx/RitmoBanner";
import TrendArtist from "../../components/Home/TrendArtist/TrendArtist";
import Albums from "../../components/Home/Albums/Albums";
import Categories from "../../components/Home/Categories/Categories";

export default function Home() {
  return (
    <>
      <HeroSwiper />
      <RitmoBanner />
      <TrendArtist />
      <Albums />
      <Categories />
    </>
  );
}
