import React, { useState, useEffect } from "react";
import TitleHeader from "../Common/TitleHeader/TitleHeader";
import Modal from "../Modal/Modal";
import SelectPlaylist from "../Modal/SelectPlaylist/SelectPlaylist";
import CreatePlaylist from "../Modal/CreatePlaylist/CreatePlaylist";
import { Link } from "react-router";

export default function PlayListContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [playlists, setPlaylists] = useState([]);
  const [step, setStep] = useState("select");
  const [selectedSong, setSelectedSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedPlaylists = localStorage.getItem("playlists");
    if (savedPlaylists) {
      try {
        setPlaylists(JSON.parse(savedPlaylists));
      } catch (error) {
        console.error("Error loading playlists:", error);
        setPlaylists([]);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("playlists", JSON.stringify(playlists));
    }
  }, [playlists, isLoading]);

  const handleClose = () => {
    setIsOpen(false);
    setStep("select");
  };

  const handleCreatePlaylist = (playlistName) => {
    const newPlaylist = {
      id: Date.now().toString(),
      name: playlistName,
      songs: [],
      totalSongs: 0,
      createdAt: new Date().toLocaleDateString("fa-IR"),
      createdTime: new Date().toISOString(),
    };

    setPlaylists((prev) => [newPlaylist, ...prev]);
    handleClose();
  };

  const handleSelectPlaylist = (playlist) => {
    if (selectedSong) {
      setPlaylists((prev) =>
        prev.map((p) => {
          if (p.id === playlist.id) {
            const songExists = p.songs.some(
              (song) => song.id === selectedSong.id,
            );
            if (!songExists) {
              return {
                ...p,
                songs: [...p.songs, selectedSong],
                totalSongs: p.songs.length + 1,
              };
            }
          }
          return p;
        }),
      );
    }
    handleClose();
  };

  const handleDeletePlaylist = (playlistId) => {
    if (window.confirm("آیا از حذف این پلی‌لیست مطمئن هستید؟")) {
      setPlaylists((prev) => prev.filter((p) => p.id !== playlistId));
    }
  };

  const handleRemoveSong = (playlistId, songId) => {
    setPlaylists((prev) =>
      prev.map((p) => {
        if (p.id === playlistId) {
          return {
            ...p,
            songs: p.songs.filter((song) => song.id !== songId),
            totalSongs: p.songs.length - 1,
          };
        }
        return p;
      }),
    );
  };

  const openModalWithSong = (song) => {
    setSelectedSong(song);
    setIsOpen(true);
  };

  if (isLoading) {
    return (
      <div className="py-16">
        <div className="container">
          <div className="flex items-center justify-center h-60">
            <div className="text-Natural-400">در حال بارگذاری...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-16">
        <div className="container">
          <TitleHeader title={"پلی لیست شخصی"} />
          <div className="playlist w-full h-60 relative flex items-center justify-center bg-Black border border-Natural-700 rounded-lg overflow-hidden">
            <button
              className="flex flex-col gap-3 items-center justify-center z-50 cursor-pointer"
              onClick={() => {
                setSelectedSong(null);
                setIsOpen(true);
              }}
            >
              <h2 className="text-lg text-white">ایجاد پلی لیست شخصی</h2>
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
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={handleClose}>
          {step === "select" ? (
            <SelectPlaylist
              setStep={setStep}
              onClose={handleClose}
              playlists={playlists}
              onSelectPlaylist={handleSelectPlaylist}
              onDeletePlaylist={handleDeletePlaylist}
            />
          ) : (
            <CreatePlaylist
              setStep={setStep}
              onClose={handleClose}
              onCreatePlaylist={handleCreatePlaylist}
            />
          )}
        </Modal>
      </section>

      {playlists.length > 0 && (
        <section className="pb-16">
          <div className="container">
            <TitleHeader title={"پلی لیست"} />
            <div className="grid grid-cols-4 gap-4">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  className="bg-Black border border-Natural-700 rounded-lg p-4 hover:border-Primary transition-all group"
                >
                  <div className="relative">
                    <div className="w-full aspect-square bg-Natural-800 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                      {playlist.songs && playlist.songs.length > 0 ? (
                        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0">
                          {playlist.songs.slice(0, 4).map((song, index) => (
                            <img
                              key={index}
                              src={song.cover || "/default-cover.jpg"}
                              alt={song.title}
                              className="w-full h-full object-cover"
                            />
                          ))}
                          {Array.from({
                            length: Math.max(
                              0,
                              4 - (playlist.songs?.length || 0),
                            ),
                          }).map((_, index) => (
                            <div
                              key={index + 4}
                              className="w-full h-full bg-Natural-700/50"
                            />
                          ))}
                        </div>
                      ) : (
                        <svg
                          className="w-12 h-12 text-Natural-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
                        </svg>
                      )}
                    </div>

                    <button
                      onClick={() => handleDeletePlaylist(playlist.id)}
                      className="absolute top-2 right-2 p-1.5 bg-Error-200 hover:bg-Error-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  <h3 className="text-white font-Pelak-Bold text-sm truncate">
                    <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-Natural-400 text-xs">
                      {playlist.totalSongs || playlist.songs?.length || 0} آهنگ
                    </p>
                    <p className="text-Natural-500 text-xs">
                      {playlist.createdAt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
