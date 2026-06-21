import React from "react";

export default function TrendPlayList() {
  return (
    <div className="w-1/4 relative flex flex-col items-center justify-center gap-8 py-8 bg-Menu rounded-2xl overflow-hidden">
      <h3 className="font-Pelak-Bold text-2xl text-White z-40">پلی لیست ترند</h3>
      <div className="flex flex-col gap-4 z-40">
        <img src="images/Banner/TrendPlayList.webp" alt="" />
        <div className="flex flex-col gap-4 items-center">
          <h4 className="font-Pelak-Bold text-lg text-white">پارتی</h4>
          <p className="font-Pelak-Medium text-base text-Natural-200">۱ ساعت و ۲۰ دقیقه . ۱۸ آهنگ</p>
        </div>
      </div>
      <span className="absolute -right-full -top-full w-175 h-175 circle-red-gradient blur-2xl opacity-50"></span>
      <span className="absolute -left-full -bottom-full w-175 h-175 circle-red-gradient blur-2xl opacity-50"></span>
      <img className="absolute" src="images/Logo-opa.png" alt="" />
    </div>
  );
}
