import React from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import CategoryBoxContainer from "../CategoryBoxContainer/CategoryBoxContainer"

export default function Categories() {
  return (
    <section className="my-16">
      <div className="container">
        <TitleHeader title={"دسته بندی‌ها"} button={true} arrow={true} />
        <CategoryBoxContainer />
      </div>
    </section>
  );
}
