import React from "react";
import { Link } from "react-router";

export default function MusicBox({ title, img, singer, id }) {
  return (
    <div className="w-50 flex flex-col items-center justify-center gap-2" id={id}>
      <Link to={`/play-music/${id}`}>
        <img
          src={img}
          alt={title}
          className=" object-cover rounded-lg"
        />
      </Link>
      <Link to={`/play-music/${id}`}>
        <h3 className="font-Pelak-Bold text-white">{title}</h3>
      </Link>
      <Link to={""}>
        <p className="text-sm text-neutral-300">{singer}</p>
      </Link>
    </div>
  );
}
