// فایل: components/PlaylistCard/PlaylistCover.jsx
import React from 'react';

export default function PlaylistCover({ songs }) {
  // فقط ۴ آهنگ اول را نمایش بده
  const displaySongs = songs.slice(0, 4);
  
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0">
      {Array.from({ length: 4 }).map((_, index) => {
        const song = displaySongs[index];
        return song ? (
          <img
            key={index}
            src={song.cover || '/default-cover.jpg'}
            alt={song.title || 'آهنگ'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div 
            key={index} 
            className="w-full h-full bg-Natural-700/50"
          />
        );
      })}
    </div>
  );
}