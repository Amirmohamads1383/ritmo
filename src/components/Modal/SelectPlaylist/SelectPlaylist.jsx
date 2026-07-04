import React, { useState } from "react";

export default function SelectPlaylist({
  setStep,
  onClose,
  playlists = [],
  onSelectPlaylist,
  onDeletePlaylist,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  // فیلتر کردن پلی‌لیست‌ها بر اساس جستجو
  const filteredPlaylists = playlists.filter((playlist) =>
    playlist.name.toLowerCase().includes(searchTerm.toLowerCase().trim()),
  );

  // تابع انتخاب پلی‌لیست
  const handleSelectPlaylist = (playlist) => {
    if (onSelectPlaylist) {
      onSelectPlaylist(playlist);
    }
    onClose();
  };

  // تابع حذف پلی‌لیست
  const handleDelete = (playlistId, e) => {
    e.stopPropagation();
    if (onDeletePlaylist) {
      onDeletePlaylist(playlistId);
    }
    setShowDeleteConfirm(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-Pelak-Bold text-lg text-white">افزودن به پلی لیست</h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="پیدا کردن پلی لیست"
              className="w-full font-Pelak-Regular text-sm text-white border border-Natural-100 rounded-lg p-3 bg-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute left-5 top-1/2 -translate-1/2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
              >
                <g clipPath="url(#a)">
                  <path
                    d="M13.875 13.875 16.5 16.5m-.75-7.875a7.125 7.125 0 1 0-14.25 0 7.125 7.125 0 0 0 14.25 0"
                    stroke="#9da3b4"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h18v18H0z" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg cursor-pointer hover:bg-white/5 transition shrink-0"
            onClick={() => setStep("create")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#a)">
                <path
                  d="M10 6.667v6.666M13.334 10H6.667M15 1.667H5A3.333 3.333 0 0 0 1.667 5v10A3.333 3.333 0 0 0 5 18.333h10A3.333 3.333 0 0 0 18.334 15V5A3.333 3.333 0 0 0 15 1.667"
                  stroke="#9da3b4"
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
            <span className="text-neutral-300 whitespace-nowrap">
              ساخت پلی لیست جدید
            </span>
          </button>
        </div>

        {/* نمایش پلی‌لیست‌ها */}
        {filteredPlaylists.length > 0 ? (
          <div className="flex flex-col gap-3 max-h-64 overflow-y-auto">
            {filteredPlaylists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-Natural-800/50 transition cursor-pointer group"
                onClick={() => handleSelectPlaylist(playlist)}
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  {/* کاور پلی لیست */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-Natural-700 shrink-0">
                    {playlist.songs && playlist.songs.length > 0 ? (
                      <img
                        src={playlist.songs[0]?.cover || "/default-cover.jpg"}
                        alt={playlist.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-Natural-400">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-sm text-white font-Pelak-Regular truncate">
                      {playlist.name}
                    </h3>
                    <span className="text-xs text-neutral-300">
                      {playlist.totalSongs || playlist.songs?.length || 0} آهنگ
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* دکمه حذف */}
                  {onDeletePlaylist && (
                    <button
                      className="p-2 rounded-lg hover:bg-red-500/20 transition opacity-0 group-hover:opacity-100 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowDeleteConfirm(playlist.id);
                      }}
                    >
                      <svg
                        className="w-4 h-4 text-red-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}

                  {/* دکمه افزودن */}
                  <button
                    className="p-2 rounded-lg bg-Primary hover:bg-Primary-600 transition-all cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlaylist(playlist);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M8 5.333v5.334M10.666 8H5.333M12 1.333H4A2.667 2.667 0 0 0 1.333 4v8A2.667 2.667 0 0 0 4 14.667h8A2.667 2.667 0 0 0 14.666 12V4A2.667 2.667 0 0 0 12 1.333"
                        stroke="#fff"
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
          <div className="text-center py-3 text-Natural-400">
            {searchTerm ? (
              <p>نتیجه‌ای برای "{searchTerm}" یافت نشد</p>
            ) : (
              <p>هنوز پلی لیستی ساخته نشده</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
