import React, { useState } from "react";

export default function Header({ showSidebar, setShowSidebar }) {
  const [search, setSearch] = useState("");

  const showSidebarHandler = () => {
  setShowSidebar((prev) => !prev);
};

  return (
    <header className="py-6 bg-Menu sticky top-0 z-60">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              className="absolute right-0 w-5 h-10 flex items-center justify-center rounded-l-md bg-Primary cursor-pointer"
              onClick={showSidebarHandler}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 12 14"
                fill="none"
                className={
                  showSidebar ? "rotate-180 transition-all" : "transition-all"
                }
              >
                <path
                  d="M4.5 9.917 7.5 7l-3-2.917"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="font-Pelak-Medium">
              <a
                href="#"
                className="py-3 px-8 rounded-lg text-White bg-Primary transition-all hover:bg-white hover:text-Primary"
              >
                موزیک
              </a>
            </button>
            <button className="font-Pelak-Medium text-White">
              <a href="#" className="py-3 px-8">
                پادکست
              </a>
            </button>
          </div>
          <form
            action=""
            className="flex items-center gap-2 w-1/2 p-4 text-Natural-300 text-sm bg-Natural-900 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="m15.74 15.74-1.43-1.43M1.43 8.228a6.797 6.797 0 1 1 13.595 0 6.797 6.797 0 0 1-13.594 0"
                stroke="#9da3b4"
                strokeWidth={1.073}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="جستجو براساس آهنگ‌، پادکست، آلبوم، هنرمند و پادکستر‌"
              className="w-full focus:outline-0"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </form>
          <div className="flex items-center justify-center gap-6">
            <div className="custom-gradient p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M18.835 4h3.767c.81 0 1.581.35 2.12.964l3.895 4.438a2.9 2.9 0 0 1 .129 3.658L18.248 26.88a2.814 2.814 0 0 1-4.495 0L3.255 13.06a2.9 2.9 0 0 1 .128-3.658L7.28 4.964A2.82 2.82 0 0 1 9.4 4h4.081m5.355 0 2.835 7.177M18.836 4H13.48m8.19 7.177h7.088m-7.087 0L16 27.685l-5.67-16.508m11.34 0H10.33M13.48 4l-3.15 7.177m-7.089 0h7.088"
                  stroke="#fff"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="bg-neutral-900 p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="m26.598 7.795-.949.316zm-.88.522a1 1 0 1 0 1.897-.633zm-4.069-6.599a1 1 0 0 0-.632 1.898zm-.11 1.017-.317.95zM5.94 19.84l-.762-.647zm1.173-2.722-.994-.112zm17.774 0 .993-.112zm1.172 2.722.762-.647zm-1.632-6.781-.994.113zm-16.854 0 .993.113zm13.363 13.959a1 1 0 1 0-1.873-.702zm-8-.702a1 1 0 0 0-1.873.702zM5.401 7.796l.95.315zm-1.017-.112a1 1 0 0 0 1.898.633zm6.599-4.068a1 1 0 1 0-.633-1.898zm-.522-.88-.316-.95zM25.65 8.11l.069.206 1.897-.633-.068-.205zm-4.632-4.495.205.068.633-1.897-.206-.069zm6.53 3.863a9 9 0 0 0-5.692-5.692l-.633 1.897A7 7 0 0 1 25.65 8.11zM24.227 23H7.772v2h16.453zm-.794-9.828.46 4.059 1.987-.225-.46-4.06zM8.106 17.23l.46-4.06-1.987-.224-.46 4.059zm-1.404 3.257a6.1 6.1 0 0 0 1.404-3.257l-1.987-.225a4.1 4.1 0 0 1-.94 2.187zm17.191-3.257a6.1 6.1 0 0 0 1.404 3.257l1.524-1.295a4.1 4.1 0 0 1-.94-2.187zM7.773 23c-1.182 0-1.934-1.497-1.07-2.513l-1.525-1.295C3.286 21.42 4.771 25 7.773 25zm16.453 2c3.003 0 4.487-3.581 2.595-5.808l-1.524 1.295c.864 1.017.111 2.512-1.07 2.512zm1.195-12.054C24.867 8.06 20.837 4.334 16 4.334v2c3.773 0 6.989 2.916 7.433 6.838zm-16.855.225C9.01 9.25 12.226 6.334 16 6.334v-2c-4.837 0-8.868 3.726-9.421 8.613zm10.497 13.144c-.43 1.148-1.617 2.018-3.063 2.018v2c2.247 0 4.202-1.357 4.936-3.316zM16 28.334c-1.446 0-2.634-.87-3.064-2.018l-1.873.702c.734 1.959 2.69 3.316 4.937 3.316zM4.453 7.479l-.069.205 1.898.633.068-.206zm5.897-5.76-.205.068.632 1.897.206-.068zm-4 6.392a7 7 0 0 1 4.427-4.427l-.632-1.897a9 9 0 0 0-5.692 5.692z"
                  fill="#fff"
                />
              </svg>
            </div>
            <div className="bg-[#23262F]/60 p-2 rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x={5.333}
                  y={9.333}
                  width={21.333}
                  height={18.667}
                  rx={6.125}
                  stroke="#fff"
                  strokeWidth={2.297}
                />
                <circle
                  cx={16}
                  cy={18.667}
                  stroke="#fff"
                  strokeWidth={2.297}
                  r={2.667}
                />
                <path
                  d="M21.334 9.333a5.333 5.333 0 0 0-10.667 0"
                  stroke="#fff"
                  strokeWidth={2.297}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
