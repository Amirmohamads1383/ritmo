import React from "react";

export default function Footer() {
  return (
    <footer className="pt-10 pb-6 bg-[#101010]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-4 w-1/6">
            <img
              className="w-full h-full"
              src="/public/images/logo-bw.webp"
              alt="Ritmo Logo"
            />
            <div className="flex items-center justify-center gap-6 px-2 py-3.5">
              <a href="#">
                <svg
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
              </a>
              <a href="#">
                <svg
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
              </a>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#a)">
                    <path
                      d="M14.227 0h-3.37v13.623c0 1.623-1.297 2.957-2.91 2.957s-2.91-1.334-2.91-2.957c0-1.594 1.268-2.898 2.824-2.956v-3.42c-3.428.057-6.194 2.869-6.194 6.376C1.667 17.16 4.49 20 7.976 20s6.309-2.87 6.309-6.377V6.638a7.8 7.8 0 0 0 4.465 1.507v-3.42C16.215 4.638 14.227 2.55 14.227 0"
                      fill="#fff"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path fill="#fff" d="M0 0h20v20H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href="#">
                <svg
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
              </a>
            </div>
          </div>
          <div className="flex items-start justify-between w-4/6">
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-Pelak-Bold text-Natural-100">ریتمو</h4>
              <ul className="flex flex-col items-start gap-4 font-Pelak-Medium text-sm text-Natural-200">
                <li>
                  <a href="#">قوانین و مقررات</a>
                </li>
                <li>
                  <a href="#">پریمیوم</a>
                </li>
                <li>
                  <a href="#">موقیعت شغلی</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-Pelak-Bold text-Natural-100">
                شبکه های اجتماعی
              </h4>
              <ul className="flex flex-col items-start gap-4 font-Pelak-Medium text-sm text-Natural-200">
                <li>
                  <a href="#">اینستاگرام</a>
                </li>
                <li>
                  <a href="#">یوتیوب</a>
                </li>
                <li>
                  <a href="#">ایکس</a>
                </li>
                <li>
                  <a href="#">تیک تاک</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-Pelak-Bold text-Natural-100">دانلود</h4>
              <ul className="flex flex-col items-start gap-4 font-Pelak-Medium text-sm text-Natural-200">
                <li>
                  <a href="#">دانلود برای مک</a>
                </li>
                <li>
                  <a href="#">دانلود برای ویندوز</a>
                </li>
                <li>
                  <a href="#">دانلود برای IOS</a>
                </li>
                <li>
                  <a href="#">دانلود برای اندروید</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-6">
              <h4 className="font-Pelak-Bold text-Natural-100">پشتیبانی</h4>
              <ul className="flex flex-col items-start gap-4 font-Pelak-Medium text-sm text-Natural-200">
                <li>
                  <a href="#">پشتیبانی</a>
                </li>
                <li>
                  <a href="#">تبلیغات</a>
                </li>
                <li>
                  <a href="#">تماس با ما</a>
                </li>
                <li>
                  <a href="#">سوالات متدوال</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-8">
        <div className="border-t-2 border-t-Natural-200">
          <div className="pt-4">
            <p className="flex items-center justify-center gap-2 text-sm text-Natural-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Z" stroke="#c7cbd8" />
                <path
                  d="M7 7.834A2.3 2.3 0 0 1 6.143 8C4.959 8 4 7.105 4 6s.96-2 2.143-2c.305 0 .595.06.857.166"
                  stroke="#c7cbd8"
                  strokeLinecap="round"
                />
              </svg>
              تمامی حقوق متعلق به ریتمو می‌باشد.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
