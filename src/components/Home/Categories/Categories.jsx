import React, { useRef } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import CategoryBoxContainer from "../CategoryBoxContainer/CategoryBoxContainer";

export default function Categories() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="my-16">
      <div className="container">
        <TitleHeader
          title={"دسته بندی‌ها"}
          button={true}
          arrow={true}
          prevRef={prevRef}
          nextRef={nextRef}
        />
        <CategoryBoxContainer prevRef={prevRef} nextRef={nextRef} />
      </div>
    </section>
  );
}
