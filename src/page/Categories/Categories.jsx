import React, { useEffect, useState } from "react";
import CategoryBox from "../../components/Common/CategoryBox/CategoryBox";
import TitleHeader from "../../components/Common/TitleHeader/TitleHeader";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data/category.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col">
            <TitleHeader title={"دسته بندی‌ها"} arrow={false} button={false} />
            <div className="grid grid-cols-4 gap-4" id="category-page">
              {categories.map((category) => (
                <CategoryBox
                  key={category.id}
                  title={category.title}
                  img={category.img}
                  slug={category.title.en}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
