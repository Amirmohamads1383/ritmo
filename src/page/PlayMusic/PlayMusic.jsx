import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";

export default function PlayMusic() {
  const { id } = useParams();
  const audioRef = useRef(null);
  const [music, setMusic] = useState(null);
  const [play, setPlay] = useState(false);
  const [isSound, setIsSound] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch("/data/musics.json");
        const data = await response.json();

        const foundMusic = data.find((item) => item.id === parseInt(id));

        if (foundMusic) {
          setMusic(foundMusic);
          setPlay(false);
        } else {
          setError("موسیقی پیدا نشد");
        }
      } catch (err) {
        setError("خطا در بارگذاری");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMusic();
  }, [id]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleEnded = () => {
      setPlay(false);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [music]);

  const musicPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (play) {
      audio.pause();
      setPlay(false);
    } else {
      audio.play();
      setPlay(true);
    }
  };

  const soundHandler = () => {
    if (!audioRef.current) return;

    const newMuteState = !isSound;
    audioRef.current.muted = newMuteState;
    setIsSound(newMuteState);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0 && isSound) {
        audioRef.current.muted = false;
        setIsSound(false);
      }
    }
  };

  const handleProgressChange = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getSoundIcon = () => {
    if (isSound || volume === 0) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M4.996 15v6q0 4.5 4.5 4.5h2.145c.555 0 1.11.165 1.59.45l4.38 2.745c3.78 2.37 6.885.645 6.885-3.81v-13.77c0-4.47-3.105-6.18-6.885-3.81l-4.38 2.745c-.48.285-1.035.45-1.59.45H9.496q-4.5 0-4.5 4.5Z"
            stroke="#fff"
            strokeWidth={1.5}
          />
          <path
            d="M28.996 12a9.99 9.99 0 0 1 0 12"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else if (volume < 0.8) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M4.996 15v6q0 4.5 4.5 4.5h2.145c.555 0 1.11.165 1.59.45l4.38 2.745c3.78 2.37 6.885.645 6.885-3.81v-13.77c0-4.47-3.105-6.18-6.885-3.81l-4.38 2.745c-.48.285-1.035.45-1.59.45H9.496q-4.5 0-4.5 4.5Z"
            stroke="#fff"
            strokeWidth={1.5}
          />
          <path
            d="M28.996 12a9.99 9.99 0 0 1 0 12"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M4.996 15v6q0 4.5 4.5 4.5h2.145c.555 0 1.11.165 1.59.45l4.38 2.745c3.78 2.37 6.885.645 6.885-3.81v-13.77c0-4.47-3.105-6.18-6.885-3.81l-4.38 2.745c-.48.285-1.035.45-1.59.45H9.496q-4.5 0-4.5 4.5Z"
            stroke="#fff"
            strokeWidth={1.5}
          />
          <path
            d="M28.996 8a6.66 6.66 0 0 1 0 8"
            stroke="#fff"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  };

  if (loading) {
    return <div className="text-white">در حال بارگذاری...</div>;
  }

  if (error || !music) {
    return <div className="text-white">{error || "موسیقی یافت نشد"}</div>;
  }

  return (
    <section>
      <div className="w-full h-full">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex items-center gap-8">
              <img
                className="w-26 h-26 object-cover rounded-lg"
                src={music.img}
                alt={music.title.fa}
              />
              <div className="flex flex-col gap-3">
                <h1 className="font-Pelak-Bold text-[40px] text-white">
                  {music.title.fa}
                </h1>
                <h3 className="font-Pelak-Bold text-xl text-white">
                  {music.singer.fa}
                </h3>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="text-neutral-200">
                  {formatTime(currentTime)}
                </span>
                <div
                  className="h-1 w-full bg-Natural-300 rounded-full cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width;
                    const newTime = x * duration;
                    if (audioRef.current) {
                      audioRef.current.currentTime = newTime;
                      setCurrentTime(newTime);
                    }
                  }}
                >
                  <div
                    className="h-full bg-white rounded-full"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  />
                </div>
                <span className="text-neutral-200">{formatTime(duration)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-32 h-1 rounded-full bg-Natural-300 cursor-pointer accent-white"
                  />
                  <button className="cursor-pointer" onClick={soundHandler}>
                    {getSoundIcon()}
                  </button>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M4.117 13v-1.548c0-3.419 2.652-6.19 5.922-6.19h11.844m-1.48-3.095 1.913 2a1.6 1.6 0 0 1 0 2.19l-1.914 2M21.882 13v1.547c0 3.42-2.65 6.19-5.921 6.19H4.117m1.48 3.096-1.913-2a1.6 1.6 0 0 1 0-2.19l1.914-2"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M14.667 12.889 8.01 9.006C6.233 7.969 4 9.25 4 11.309v9.382c0 2.058 2.233 3.34 4.01 2.303l6.657-3.883m0-6.222v-1.58c0-2.058 2.232-3.34 4.01-2.303l8.041 4.69c1.764 1.03 1.764 3.578 0 4.607l-8.041 4.69c-1.778 1.038-4.01-.244-4.01-2.302v-1.58m0-6.222v6.222"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer" onClick={musicPlay}>
                    {play == false ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M31.482 24.244 17.5 32.752c-2.34 1.424-5.25-.375-5.25-3.244V12.492c0-2.869 2.91-4.668 5.25-3.244l13.982 8.508c2.357 1.434 2.357 5.054 0 6.488Z"
                          stroke="#fff"
                          strokeWidth={1.5}
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={42}
                        height={42}
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M14 10h4.5c1.933 0 3.5 1.567 3.5 3.5v15c0 1.933-1.567 3.5-3.5 3.5H14m10.5-22h4.5c1.933 0 3.5 1.567 3.5 3.5v15c0 1.933-1.567 3.5-3.5 3.5h-4.5"
                          stroke="#fff"
                          strokeWidth={1.5}
                        />
                      </svg>
                    )}
                  </button>
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="m17.372 12.889 6.657-3.883c1.777-1.037 4.01.245 4.01 2.303v9.382c0 2.058-2.233 3.34-4.01 2.303l-6.657-3.883m0-6.222v-1.58c0-2.058-2.232-3.34-4.01-2.303l-8.04 4.69c-1.765 1.03-1.765 3.578 0 4.607l8.04 4.69c1.778 1.038 4.01-.244 4.01-2.302v-1.58m0-6.222v6.222"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="m21.306 3.25 2.061 2.101a1.647 1.647 0 0 1 0 2.298l-2.06 2.101m-6.38-3.25H22.9m-11.163 13H2.168m19.138 3.25 2.061-2.101a1.647 1.647 0 0 0 0-2.298l-2.061-2.101M22.9 19.5h-2.436c-2.416 0-4.625-1.391-5.706-3.593l-2.853-5.814C10.825 7.891 8.615 6.5 6.2 6.5H2.168"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M18.418 7.042c1.197 0 2.167.97 2.167 2.166M13 6.178l.742-.761a5.81 5.81 0 0 1 8.36 0c2.247 2.303 2.316 6.016.156 8.406l-6.203 6.867a4.094 4.094 0 0 1-6.11 0l-6.203-6.867c-2.16-2.39-2.09-6.102.156-8.406a5.81 5.81 0 0 1 8.36 0z"
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
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_9227_15983)">
                        <path
                          d="M17.3346 11.9168L13.0013 16.2502L8.66797 11.9168M13.0013 16.2502L13.0013 1.0835"
                          stroke="white"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.7645 8.6665C20.9539 10.1502 21.6654 12.0336 21.6654 14.0832C21.6654 18.8696 17.7852 22.7498 12.9987 22.7498C8.21223 22.7498 4.33203 18.8696 4.33203 14.0832C4.33203 12.0336 5.04347 10.1502 6.23287 8.6665"
                          stroke="white"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9227_15983">
                          <rect width={26} height={26} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M8.266 11.304a3.792 3.792 0 1 0 0 3.392m0-3.392c.255.51.4 1.086.4 1.696s-.145 1.186-.4 1.696m0-3.392 7.299-3.65m-7.3 7.042 7.3 3.65m0-10.692a3.792 3.792 0 1 0 6.782-3.392 3.792 3.792 0 0 0-6.782 3.392Zm0 10.691a3.792 3.792 0 1 0 6.784 3.392 3.792 3.792 0 0 0-6.784-3.392Z"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button className="cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M15.167 6.5h7.583m-7.583 5.417h7.583m-19.5 5.417h19.5M3.25 22.75h19.5M6.386 12.516l3.821-1.911c1.597-.799 1.597-3.078 0-3.876l-3.82-1.911c-1.441-.72-3.136.327-3.136 1.938v3.822c0 1.61 1.695 2.658 3.136 1.938"
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
                      width={26}
                      height={26}
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M13.001 6.5v2.166A4.333 4.333 0 0 0 17.335 13H19.5M13 6.5a4.333 4.333 0 0 1 4.334-4.333H19.5A4.333 4.333 0 0 1 23.835 6.5v2.166A4.333 4.333 0 0 1 19.5 13M13 6.5H6.5a4.333 4.333 0 0 0-4.333 4.333V19.5A4.333 4.333 0 0 0 6.5 23.833h8.667A4.333 4.333 0 0 0 19.5 19.5V13"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.582 13v5.416h5.417m-5.417 0 6.5-6.5"
                        stroke="#fff"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <audio ref={audioRef} src={music.audio} />
        </div>
      </div>
    </section>
  );
}
