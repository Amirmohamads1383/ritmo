import React from "react";
import { Link } from "react-router";

export default function AlbumsBox({ name, img, singer, nameEn, singerEn }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to={`/album/${nameEn}`}>
        <img
          className="w-50 h-50 object-cover rounded-lg"
          src={img}
          alt={name}
        />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2 my-2">
        <Link to={`/album/${nameEn}`}>
          <h3 className="font-Pelak-Bold text-base text-white">{name}</h3>
        </Link>
        <Link to={`/artist/${singerEn}`}>
          <span className="text-sm text-Natural-300">{singer}</span>
        </Link>
      </div>
    </div>
  );
}
