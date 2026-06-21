import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "../../Common/CategoryBox/CategoryBox";

import "swiper/css";

export default function CategoryBoxContainer() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/category.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <Swiper spaceBetween={16} slidesPerView={4}>
      {categories.map((category) => (
        <SwiperSlide key={category.id}>
          <CategoryBox
            title={category.title}
            img={category.img}
            slug={category.title.en}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
