import React from "react";

export default function HeroSwiperCard({img}) {
  return (
      <div className="relative flex items-end justify-end p-6 h-full rounded-lg bg-cover bg-center overlay" style={{ backgroundImage: `url(${img})` }}>
        <div className="flex items-center justify-between w-full z-50">
          <div className="flex flex-col items-start gap-2">
            <h4 className="font-Pelak-Bold text-[40px] text-white">تهران</h4>
            <span className="font-Pelak-Medium text-2xl text-Natural-200">سوگند</span>
          </div>
          <div className="flex items-center justify-center w-14 h-14 border border-White rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={39}
              height={39}
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                d="m28.859 22.224-12.817 7.799c-2.144 1.305-4.813-.344-4.813-2.974V11.45c0-2.63 2.669-4.279 4.813-2.974l12.817 7.799c2.16 1.315 2.16 4.633 0 5.948"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
  );
}
