import React from "react";
import { Link } from "react-router";

export default function CategoryBox({ title, img, slug }) {
  return (
    <Link to={`/category/${slug}`}>
      <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black rounded-lg z-10 pointer-events-none"></div>
        <img
          className="w-full h-50 object-cover rounded-lg"
          src={img}
          alt={title}
        />
        <span
          className="absolute w-165 h-151.75 rounded-full opacity-20 z-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(57, 62, 75, 0.01) 0%, rgba(57, 62, 75, 1) 100%)",
          }}
        ></span>
        <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white z-30 text-center">
          {title.fa}
        </h3>
      </div>
    </Link>
  );
}
