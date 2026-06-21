import React from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import ArtistBoxContainer from "../ArtistBoxContainer/ArtistBoxContainer"
export default function TrendArtist() {
  return (
    <section className="my-16">
      <div className="container">
        <TitleHeader title={"خواننده ترند"} button={true} arrow={true} />
        <ArtistBoxContainer />
      </div>
    </section>
  );
}
