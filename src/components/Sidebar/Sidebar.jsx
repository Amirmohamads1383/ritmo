import React from "react";
import { NavLink } from "react-router";

export default function Sidebar({
  showSidebarHandler,
  showSidebar,
  setShowSidebar,
}) {
  return (
    <aside
      className={`w-60 h-full fixed top-0 bg-Menu z-50 transition-all duration-300 ${showSidebar ? "right-0" : "-right-60"}`}
      onClick={showSidebarHandler}
    >
      <div className="flex flex-col justify-between h-full py-4 pt-4">
        <div className="flex flex-col items-center gap-8">
          <img
            className="flex items-center justify-center w-4/6"
            src="/images/Logo.webp"
            alt=""
          />
          <nav className="flex flex-col justify-start gap-2 w-full">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <span className="relative flex items-center gap-2 py-4.5 px-6 font-Pelak-Bold text-sm text-right text-white transition-all hover:bg-Natural-800 z-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M6.667 13.333c2.643 1.122 4.113 1.101 6.666 0M17.5 8.46v6.513c0 1.857-1.492 3.361-3.333 3.361H5.833c-1.84 0-3.333-1.504-3.333-3.36V8.458c0-1.01.45-1.965 1.225-2.604l4.167-3.43a3.31 3.31 0 0 1 4.216 0l4.167 3.43A3.37 3.37 0 0 1 17.5 8.46"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                خانه
              </span>
            </NavLink>
            <NavLink
              to={"/category"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <span className="relative flex items-center gap-2 py-4.5 px-6 font-Pelak-Bold text-sm text-right text-white transition-all hover:bg-Natural-800 z-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  {" "}
                  <g
                    clipPath="url(#a)"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path d="M1.666 3.333c0-.92.746-1.666 1.667-1.666h3.333c.92 0 1.667.746 1.667 1.666v3.334c0 .92-.747 1.666-1.667 1.666H3.333c-.92 0-1.667-.746-1.667-1.666zm10 0c0-.92.746-1.666 1.667-1.666h3.333c.92 0 1.667.746 1.667 1.666v3.334c0 .92-.746 1.666-1.667 1.666h-3.333c-.92 0-1.667-.746-1.667-1.666zm-10 10c0-.92.746-1.666 1.667-1.666h3.333c.92 0 1.667.746 1.667 1.666v3.334c0 .92-.747 1.666-1.667 1.666H3.333c-.92 0-1.667-.746-1.667-1.666zm10 0c0-.92.746-1.666 1.667-1.666h3.333c.92 0 1.667.746 1.667 1.666v3.334c0 .92-.746 1.666-1.667 1.666h-3.333c-.92 0-1.667-.746-1.667-1.666z" />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <clipPath id="a">
                      {" "}
                      <path fill="currentColor" d="M0 0h20v20H0z" />{" "}
                    </clipPath>{" "}
                  </defs>{" "}
                </svg>{" "}
                دسته‌بندی
              </span>
            </NavLink>
            <NavLink
              to={"/artist"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <span className="relative flex items-center gap-2 py-4.5 px-6 font-Pelak-Bold text-sm text-right text-white transition-all hover:bg-Natural-800 z-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g
                    clipPath="url(#a)"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  >
                    <path d="M15.465 16.29a5.835 5.835 0 0 0-10.931 0m0 0a8.3 8.3 0 0 0 5.465 2.043 8.3 8.3 0 0 0 5.466-2.042 8.333 8.333 0 1 0-10.931 0Z" />
                    <circle
                      cx={2.5}
                      cy={2.5}
                      r={2.5}
                      transform="matrix(1 0 0 -1 7.5 10)"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#currentColor" d="M0 0h20v20H0z" />
                    </clipPath>
                  </defs>
                </svg>
                آرتیست‌ها
              </span>
            </NavLink>
            <NavLink
              to={"/album"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <span className="relative flex items-center gap-2 py-4.5 px-6 font-Pelak-Bold text-sm text-right text-white transition-all hover:bg-Natural-800 z-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M14.166 10a4.167 4.167 0 0 0-4.167-4.167v6.25m0 0a2.083 2.083 0 1 1-4.166 0 2.083 2.083 0 0 1 4.166 0m-5 6.25h10A3.333 3.333 0 0 0 18.333 15V5a3.333 3.333 0 0 0-3.334-3.333H5A3.333 3.333 0 0 0 1.666 5v10a3.333 3.333 0 0 0 3.333 3.333"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z" />
                    </clipPath>
                  </defs>
                </svg>
                آلبوم‌ها
              </span>
            </NavLink>
            <NavLink
              to={"/playlist"}
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <span className="relative flex items-center gap-2 py-4.5 px-6 font-Pelak-Bold text-sm text-right text-white transition-all hover:bg-Natural-800 z-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M8.333 4.167v-.75a.75.75 0 0 0-.75.75zm3.416 4.166a.75.75 0 0 0 1.5 0zM5 2.417h6.667v-1.5H4.999zM14.25 5v6.667h1.5V5zm-2.583 9.25H4.999v1.5h6.667zm-9.25-2.583V5h-1.5v6.667zM5 14.25a2.583 2.583 0 0 1-2.583-2.583h-1.5A4.083 4.083 0 0 0 5 15.75zm9.25-2.583a2.583 2.583 0 0 1-2.583 2.583v1.5a4.083 4.083 0 0 0 4.083-4.083zm-2.583-9.25A2.583 2.583 0 0 1 14.249 5h1.5A4.083 4.083 0 0 0 11.666.917zM4.999.917A4.083 4.083 0 0 0 .916 5h1.5a2.583 2.583 0 0 1 2.583-2.583zm12.584 7.416V15h1.5V8.333zm-2.584 9.25H8.333v1.5h6.666zm-6.666 0A2.583 2.583 0 0 1 5.749 15h-1.5a4.083 4.083 0 0 0 4.084 4.083zM17.583 15a2.583 2.583 0 0 1-2.584 2.583v1.5A4.083 4.083 0 0 0 19.083 15zm-2.584-9.25a2.583 2.583 0 0 1 2.584 2.583h1.5a4.083 4.083 0 0 0-4.084-4.083zm-6.666-.833a3.417 3.417 0 0 1 3.416 3.416h1.5a4.917 4.917 0 0 0-4.916-4.916zm-.75 5.5c0 .736-.597 1.333-1.334 1.333v1.5a2.833 2.833 0 0 0 2.834-2.833zM6.249 11.75a1.333 1.333 0 0 1-1.333-1.333h-1.5a2.833 2.833 0 0 0 2.833 2.833zm-1.333-1.333c0-.737.597-1.334 1.333-1.334v-1.5a2.833 2.833 0 0 0-2.833 2.834zm1.333-1.334c.737 0 1.334.597 1.334 1.334h1.5a2.833 2.833 0 0 0-2.834-2.834zm1.334-4.916v6.25h1.5v-6.25z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="currentColor" d="M0 0h20v20H0z" />
                    </clipPath>
                  </defs>
                </svg>
                پلی لیست
              </span>
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center justify-between px-6 py-4">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#a)">
              <path
                d="M10 0C4.477 0 0 4.477 0 10c0 4.69 3.229 8.625 7.584 9.706v-6.65H5.522V10h2.062V8.683c0-3.403 1.54-4.981 4.882-4.981.634 0 1.727.124 2.174.248v2.77a13 13 0 0 0-1.155-.037c-1.64 0-2.273.621-2.273 2.236V10h3.266l-.56 3.056h-2.706v6.87A9.997 9.997 0 0 0 20 10c0-5.523-4.477-10-10-10"
                fill="#fff"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M15.272 1.587h2.81l-6.14 7.02 7.224 9.551H13.51l-4.431-5.793-5.07 5.793H1.195l6.57-7.508L.832 1.587h5.8l4.006 5.295zm-.987 14.889h1.558L5.788 3.18H4.116z"
              fill="#fff"
            />
          </svg>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M14.227 0h-3.37v13.623c0 1.623-1.297 2.957-2.91 2.957s-2.91-1.334-2.91-2.957c0-1.594 1.268-2.898 2.824-2.956v-3.42c-3.428.057-6.194 2.869-6.194 6.376C1.667 17.16 4.49 20 7.976 20s6.309-2.87 6.309-6.377V6.638a7.8 7.8 0 0 0 4.465 1.507v-3.42C16.215 4.638 14.227 2.55 14.227 0"
              fill="#fff"
            />
          </svg>
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#a)" fill="#fff">
              <g clipPath="url(#b)">
                <path d="M10 1.8c2.672 0 2.988.012 4.04.06.976.042 1.503.206 1.855.343.464.18.8.399 1.148.746.352.352.566.684.746 1.149.137.351.3.882.344 1.855.047 1.055.058 1.371.058 4.04 0 2.671-.011 2.987-.058 4.038-.043.977-.207 1.504-.344 1.856-.18.465-.398.8-.746 1.148a3.1 3.1 0 0 1-1.148.746c-.352.137-.883.301-1.856.344-1.055.047-1.371.059-4.039.059-2.672 0-2.988-.012-4.04-.059-.976-.043-1.503-.207-1.855-.344a3.1 3.1 0 0 1-1.148-.746 3.1 3.1 0 0 1-.746-1.148c-.137-.352-.3-.883-.344-1.856-.047-1.054-.058-1.37-.058-4.039 0-2.672.011-2.988.058-4.039.043-.976.207-1.504.344-1.855.18-.465.398-.801.746-1.149a3.1 3.1 0 0 1 1.148-.746c.352-.137.883-.3 1.856-.344 1.05-.046 1.367-.058 4.039-.058M10 0C7.285 0 6.945.012 5.879.059 4.816.105 4.086.277 3.453.523A4.9 4.9 0 0 0 1.68 1.68 4.9 4.9 0 0 0 .523 3.45C.277 4.085.105 4.811.06 5.874.012 6.945 0 7.285 0 10s.012 3.055.059 4.121c.046 1.063.218 1.793.464 2.426.258.66.598 1.219 1.157 1.773a4.9 4.9 0 0 0 1.77 1.153c.636.246 1.362.418 2.425.465 1.066.046 1.406.058 4.121.058s3.055-.012 4.121-.058c1.063-.047 1.793-.22 2.426-.465a4.9 4.9 0 0 0 1.77-1.153 4.9 4.9 0 0 0 1.152-1.77c.246-.636.418-1.363.465-2.425.047-1.066.058-1.406.058-4.121s-.011-3.055-.058-4.121c-.047-1.063-.22-1.793-.465-2.426A4.7 4.7 0 0 0 18.32 1.68 4.9 4.9 0 0 0 16.55.527C15.915.281 15.188.11 14.126.063 13.055.012 12.715 0 10 0" />
                <path d="M10 4.863A5.14 5.14 0 0 0 4.863 10a5.138 5.138 0 0 0 10.273 0c0-2.836-2.3-5.137-5.136-5.137m0 8.469a3.333 3.333 0 1 1 .001-6.665A3.333 3.333 0 0 1 10 13.332m6.54-8.672a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0" />
              </g>
              <path d="M16.54 4.66a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0" />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
              <clipPath id="b">
                <path fill="#fff" d="M0 0h20v20H0z" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </aside>
  );
}
