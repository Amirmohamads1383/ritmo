import React, { useState } from "react";
import TitleHeader from "../../Common/TitleHeader/TitleHeader";
import AlbumsBox from "../../Common/AlbumsBox/AlbumsBox";

export default function AllAlbums({albums}) {
  const [visibleCount, setVisibleCount] = useState(12);
  const itemsPerPage = 12;

  const handleLoadMore = () => {
    const newCount = visibleCount + itemsPerPage;
    setVisibleCount(Math.min(newCount, albums.length));
  };

  const visibleAlbums = albums.slice(0, visibleCount);
  const hasMore = visibleCount < albums.length;
  return (
    <section className="py-16">
      <div className="container">
        <TitleHeader title={"تمامی آلبوم‌ها"} />
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-7 gap-4">
            {visibleAlbums.map((album) => (
              <AlbumsBox
                key={album.id}
                name={album.name.fa}
                singer={album.singer.fa}
                img={album.img}
                id={album.id}
                nameEn={album.name.en}
              />
            ))}
          </div>
          {hasMore && (
            <svg
              className="cursor-pointer m-auto"
              onClick={handleLoadMore}
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M20 .5C30.77.5 39.5 9.23 39.5 20S30.77 39.5 20 39.5.5 30.77.5 20 9.23.5 20 .5Z"
                stroke="#c7cbd8"
              />
              <path
                d="m15.834 15.833 4.167 3.334 4.166-3.334m-8.333 5 4.167 3.334 4.166-3.334"
                stroke="#c7cbd8"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}
