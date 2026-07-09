import React, { useRef } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import AlbumsBoxContainer from "../AlbumsBoxContainer/AlbumsBoxContainer";

export default function Albums() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section>
      <div className="container">
        <TitleHeader
          title={"آلبوم‌ها"}
          button={true}
          arrow={true}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        <AlbumsBoxContainer prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
}
