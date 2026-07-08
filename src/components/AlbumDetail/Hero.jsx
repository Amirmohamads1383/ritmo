import React from "react";

export default function Hero({ name, img, singer, time, musicLenght }) {
  return (
    <section className="relative overflow-hidden py-30">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
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
          <img src={img} alt={name} className="w-72 rounded-lg" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="font-Pelak-Bold text-2xl text-Natural-200">
                    آلبوم
                  </span>
                  <h1 className="font-Pelak-Bold text-5xl text-white">
                    {name}
                  </h1>
                </div>
                <h2 className="font-Pelak-Bold text-base text-white">
                  {singer}
                </h2>
              </div>
              <div className="flex items-center gap-5 font-Pelak-Medium text-Natural-200">
                <span>{`${musicLenght} آهنگ`}</span>
                <span></span>
                <span>{time}</span>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <button className="flex items-center gap-2 px-4 py-3 bg-Primary text-white rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="m14.992 11.545-6.658 4.051c-1.114.678-2.5-.178-2.5-1.545V5.95c0-1.367 1.386-2.223 2.5-1.545l6.658 4.051c1.123.683 1.123 2.407 0 3.09Z"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  />
                </svg>
                پخش موزیک
              </button>
              <div className="flex items-center gap-4">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7.631 10.434a3.5 3.5 0 1 0 0 3.132m0-3.132C7.867 10.906 8 11.437 8 12s-.133 1.095-.369 1.566m0-3.132 6.738-3.368m-6.738 6.5 6.738 3.368m0-9.868a3.5 3.5 0 1 0 6.26-3.132 3.5 3.5 0 0 0-6.26 3.132Zm0 9.868a3.5 3.5 0 1 0 6.262 3.131 3.5 3.5 0 0 0-6.262-3.13Z"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
