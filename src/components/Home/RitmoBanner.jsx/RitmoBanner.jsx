import React from "react";
import RitmoPlus from "../RitmoPlus/RitmoPlus"
import TrendPlayList from "../TrendPlayList/TrendPlayList"

export default function RitmoBanner() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center gap-10">
          <RitmoPlus />
          <TrendPlayList />
        </div>
      </div>
    </section>
  );
}
