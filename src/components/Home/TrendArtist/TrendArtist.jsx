import React, { useRef } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import ArtistBoxContainer from "../ArtistBoxContainer/ArtistBoxContainer";
export default function TrendArtist() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="my-16">
      <div className="container">
        <TitleHeader
          title={"خواننده ترند"}
          button={true}
          arrow={true}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        <ArtistBoxContainer prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
}
