import React from "react";

export default function Hero({category}) {
  return (
    <section>
      <div
        className="bg-cover bg-no-repeat relative py-16"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url("${category.img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="flex items-center gap-8 py-12">
            <img
              src={category.img}
              alt={category.title.fa}
              className="w-72 h-72 rounded-lg object-cover shadow-2xl"
            />
            <div className="w-2/3 flex flex-col gap-8">
              <h1 className="font-Pelak-Bold text-4xl text-white">
                {category.title.fa}
              </h1>
              <p className="text-base/loose text-Natural-100 leading-relaxed">
                {category.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
