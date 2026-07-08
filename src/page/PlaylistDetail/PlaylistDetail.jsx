import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

export default function PlaylistDetail() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [allMusics, setAllMusics] = useState([]);
  const { playlistSlug } = useParams();

  useEffect(() => {
    const saved = localStorage.getItem("playlists");
    if (saved) {
      const allPlaylists = JSON.parse(saved);
      const found = allPlaylists.find((p) => p.id === playlistSlug);
      setPlaylist(found || null);
    }
    setLoading(false);
  }, [playlistSlug]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data/musics.json");
        const data = await response.json();
        setAllMusics(data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };
    loadData();
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);

    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setSearchLoading(true);
    const term = query.toLowerCase().trim();

    // جستجو در موسیقی‌ها
    const results = allMusics.filter((music) => {
      const titleFa = music.title.fa.toLowerCase();
      const titleEn = music.title.en.toLowerCase();
      const singerFa = music.singer.fa.toLowerCase();
      const singerEn = music.singer.en.toLowerCase();

      return (
        titleFa.includes(term) ||
        titleEn.includes(term) ||
        singerFa.includes(term) ||
        singerEn.includes(term)
      );
    });

    setSearchResults(results);
    setSearchLoading(false);
  };

  const addToPlaylist = (song) => {
    if (!playlist) return;

    const existingSongs = playlist.songs || [];

    // بررسی تکراری نبودن
    const isExist = existingSongs.some((existing) => {
      return existing.id === song.id;
    });

    if (isExist) {
      alert("این آهنگ قبلاً در پلی‌لیست است!");
      return;
    }

    // آپدیت پلی‌لیست
    const updatedPlaylist = {
      ...playlist,
      songs: [...existingSongs, song],
      totalSongs: existingSongs.length + 1,
    };

    // ذخیره در localStorage
    const saved = localStorage.getItem("playlists");
    if (saved) {
      const allPlaylists = JSON.parse(saved);
      const updatedPlaylists = allPlaylists.map((p) =>
        p.id === playlistSlug ? updatedPlaylist : p,
      );
      localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    }

    setPlaylist(updatedPlaylist);
    setSearchResults([]);
    setSearchTerm("");
    alert(`آهنگ "${song.title.fa}" با موفقیت اضافه شد!`);
  };

  const removeFromPlaylist = (songId) => {
    if (!window.confirm("آیا از حذف این آهنگ مطمئن هستید؟")) return;

    const updatedSongs = playlist.songs.filter((s) => s.id !== songId);
    const updatedPlaylist = {
      ...playlist,
      songs: updatedSongs,
      totalSongs: updatedSongs.length,
    };

    const saved = localStorage.getItem("playlists");
    if (saved) {
      const allPlaylists = JSON.parse(saved);
      const updatedPlaylists = allPlaylists.map((p) =>
        p.id === playlistSlug ? updatedPlaylist : p,
      );
      localStorage.setItem("playlists", JSON.stringify(updatedPlaylists));
    }

    setPlaylist(updatedPlaylist);
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="container">
          <div className="text-center text-Natural-400">در حال بارگذاری...</div>
        </div>
      </div>
    );
  }

  if (!playlist) {
    return (
      <div className="py-16">
        <div className="container">
          <div className="text-center text-Natural-400">
            <h2 className="text-2xl text-white mb-4">پلی‌لیست پیدا نشد!</h2>
            <Link to="/playlist" className="text-Primary hover:underline">
              بازگشت به پلی‌لیست‌ها
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="py-16 container relative">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url("${playlist?.songs?.[0]?.img || "/default-cover.jpg"}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
          }}
        />
        <div className="flex items-center gap-10 mb-8">
          <div className="w-72 h-72 bg-Natural-800 rounded-lg flex items-center justify-center overflow-hidden">
            {playlist.songs.length > 0 ? (
              <img
                src={playlist.songs[0].img || "/default-cover.jpg"}
                className="w-full h-full object-cover"
                alt={playlist.name}
              />
            ) : (
              <span className="text-Natural-400 text-6xl">🎵</span>
            )}
          </div>
          <div>
            <span className="block font-Pelak-Bold text-2xl mb-2 text-Natural-200">
              پلی لیست
            </span>
            <h1 className="text-5xl text-white font-Pelak-Bold">
              {playlist.name}
            </h1>
            <p className="text-Natural-200 text-sm mt-4">
              {playlist.totalSongs} آهنگ
            </p>
            <div className="flex items-center gap-10 mt-8">
              <button className="flex items-center justify-center gap-2 py-3 px-4 text-white bg-Primary rounded-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="m14.99 11.545-6.658 4.051c-1.114.678-2.5-.178-2.5-1.545V5.95c0-1.367 1.386-2.223 2.5-1.545l6.658 4.051c1.123.683 1.123 2.407 0 3.09Z"
                    stroke="#fff"
                    strokeWidth={1.5}
                    strokeLinejoin="round"
                  />
                </svg>
                پخش پلی لیست
              </button>
              <div className="flex items-center gap-4">
                <button className="cursor-pointer">
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
                </button>
                <button className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 8v8m4-4H8m4 10c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
                      stroke="#fff"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="cursor-pointer">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* بخش جستجو */}
      <section className="container">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="جستجوی آهنگ یا خواننده..."
              className="w-full border border-Natural-300 bg-transparent text-white px-4 py-3 pr-12 rounded-lg focus:outline-none focus:border-Primary"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-Natural-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>

          {/* نتایج جستجو */}
          {searchTerm.trim() && (
            <div className="mt-4 bg-Black border border-Natural-700 rounded-lg max-h-80 overflow-y-auto">
              {searchLoading ? (
                <div className="p-4 text-center text-Natural-400">
                  در حال جستجو...
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((song) => (
                  <div
                    key={song.id}
                    className="flex items-center justify-between p-3 border-b border-Natural-700 last:border-0 hover:bg-Natural-800/30 transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={song.img || "/default-cover.jpg"}
                        className="w-12 h-12 rounded object-cover"
                        alt={song.title.fa}
                      />
                      <div>
                        <p className="text-white">{song.title.fa}</p>
                        <p className="text-Natural-400 text-sm">
                          {song.singer.fa}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => addToPlaylist(song)}
                      className="px-4 py-1 bg-Primary text-white rounded-lg hover:bg-Primary/80 transition"
                    >
                      افزودن
                    </button>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-Natural-400">
                  نتیجه‌ای برای "{searchTerm}" یافت نشد
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="container pb-8">
        {/* لیست آهنگ‌های پلی‌لیست */}
        {playlist.songs.length > 0 ? (
          <div className="">
            {playlist.songs.map((song, index) => (
              <div
                key={song.id}
                className="flex items-center justify-between gap-4 py-3 px-5 border-t first:border-t-0 border-t-Natural-800 hover:bg-Natural-800/30 transition"
              >
                <div className="flex items-center gap-4">
                  <div className="font-Pelak-Regular text-xl text-white">
                    {index + 1}
                  </div>
                  <img
                    src={song.img || "/default-cover.jpg"}
                    className="w-16 h-16 rounded object-cover"
                    alt={song.title.fa}
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-Pelak-Bold text-lg text-white">
                      {song.title.fa}
                    </span>
                    <span className="font-Pelak-Regular text-Natural-300">
                      {song.singer.fa}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-4">
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 6.5a2 2 0 0 1 2 2m-7-2.797L12.685 5a5.36 5.36 0 0 1 7.717 0c2.073 2.127 2.137 5.554.144 7.76l-5.726 6.338a3.78 3.78 0 0 1-5.64 0L3.454 12.76C1.46 10.554 1.524 7.127 3.598 5a5.36 5.36 0 0 1 7.717 0z"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m16 11-4 4-4-4m4 4V1"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.245 8a8 8 0 1 1-12.49 0"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8v8m4-4H8m4 10c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 6h7m-7 5h7M3 16h18M3 21h18M5.894 11.553l3.528-1.764c1.474-.737 1.474-2.84 0-3.578L5.894 4.447A2 2 0 0 0 3 6.237v3.527a2 2 0 0 0 2.894 1.789"
                          stroke="#9da3b4"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <p className="text-white">۰۱:۴۱</p>
                  <button
                    onClick={() => removeFromPlaylist(song.id)}
                    className="text-red-400 hover:text-red-300 transition cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M5 8v10a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V8m-5 3v6m-4-6v6m6-12-1.406-2.11A2 2 0 0 0 12.93 2h-1.86a2 2 0 0 0-1.664.89L8 5m8 0H8m8 0h5M8 5H3"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-Black border border-Natural-700 rounded-lg p-12 text-center">
            <p className="text-Natural-400">این پلی‌لیست خالی است</p>
          </div>
        )}
      </section>
    </>
  );
}
