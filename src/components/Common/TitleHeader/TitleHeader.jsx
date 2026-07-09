import React from "react";

export default function TitleHeader({
  title,
  button,
  arrow,
  prevRef,
  nextRef,
}) {
  return (
    <div className="flex items-center justify-between pb-8">
      <div className="text-White">
        <h2 className="font-Pelak-Bold text-xl">{title}</h2>
      </div>
      <div className="flex items-center gap-6">
        {arrow && (
          <div className="flex items-center gap-4 text-white">
            <button className="cursor-pointer" ref={prevRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M13.333 22.667 18.666 16l-5.333-6.667"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="cursor-pointer" ref={nextRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M18.667 9.333 13.334 16l5.333 6.667"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
        {button && (
          <button>
            <a
              href="#"
              className="font-Pelak-Medium px-4 py-2 text-Natural-300"
            >
              مشاهده‌ی همه
            </a>
          </button>
        )}
      </div>
    </div>
  );
}
