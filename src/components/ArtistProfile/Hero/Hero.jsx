import React from "react";

export default function Hero({ name, img, desc, cat }) {
  return (
    <section className="relative overflow-hidden py-30">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(10px)",
        }}
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(13,13,14,20%), rgba(13,13,14,100%))",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-8">
          <img
            src={img}
            className="w-72 h-72 object-cover rounded-full"
            alt={name}
          />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h1 className="font-Pelak-Bold text-[40px] text-white">
                  {name}
                </h1>
                <h3 className="text-lg text-Natural-200">{cat}</h3>
              </div>
              <p className="text-neutral-100 text-base/loose max-w-2xl">
                {desc}
              </p>
            </div>
            <div className="flex items-center gap-4.5">
              <button className="flex items-center justify-center p-3 bg-Primary rounded-lg cursor-pointer hover:bg-Primary/80 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="m19.666 3 1.903 1.94a1.52 1.52 0 0 1 0 2.12L19.666 9m-5.889-3h7.36M10.834 18H2m17.666 3 1.903-1.94a1.52 1.52 0 0 0 0-2.12L19.666 15m1.472 3h-2.25c-2.23 0-4.269-1.284-5.266-3.317l-2.634-5.366C9.991 7.284 7.952 6 5.721 6H2"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 bg-Primary rounded-lg cursor-pointer hover:bg-Primary/80 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <ellipse
                    cx={8.333}
                    cy={14.583}
                    rx={5.833}
                    ry={2.917}
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  />
                  <circle
                    cx={8.333}
                    cy={5.833}
                    r={3.333}
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 9.167h-3.334M15.834 7.5v3.333"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-white font-Pelak-Medium">دنبال کردن</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}