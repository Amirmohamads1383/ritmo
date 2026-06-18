import React from "react";
import TitleHeader from "../../components/TitleHeader/TitleHeader";
import HeroSwiper from "../../components/HeroSwiper/HeroSwiper";

export default function Home() {
  return (
    <>
      <section className="my-16">
        <div className="container">
          <TitleHeader title={"آهنگ‌های ترند"} button={true} arrow={false} />
          <HeroSwiper />
        </div>
      </section>
    </>
  );
}
