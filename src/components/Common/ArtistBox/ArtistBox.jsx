import React from "react";
import { Link } from "react-router";

export default function ArtistBox({ title, img, nameEn }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Link to={`/artist/${nameEn}`}>
        <img
          src={img}
          alt={title}
          className="w-50 h-50 object-cover rounded-full"
        />
      </Link>
      <h3 className="font-Pelak-Bold text-lg text-white">
        <Link to={`/artist/${nameEn}`}>{title}</Link>
      </h3>
    </div>
  );
}
