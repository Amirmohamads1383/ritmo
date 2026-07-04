// فایل: components/PlaylistCard/PlaylistCard.jsx
import React from 'react';
import PlaylistCover from '../Modal/PlayListCover/PlaylistCover';

export default function PlaylistCard({ playlist }) {
  return (
    <div className="bg-Black border border-Natural-700 rounded-lg overflow-hidden hover:border-Primary transition-all cursor-pointer group">
      {/* کاور پلی لیست */}
      <div className="relative w-full aspect-square bg-Natural-800">
        {playlist.songs.length > 0 ? (
          <PlaylistCover songs={playlist.songs} />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-Natural-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
            </svg>
          </div>
        )}
        
        {/* تعداد آهنگ‌ها */}
        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-Natural-300">
          {playlist.totalSongs} آهنگ
        </div>
      </div>
      
      {/* اطلاعات پلی لیست */}
      <div className="p-3">
        <h3 className="text-white font-Pelak-Bold text-sm truncate">
          {playlist.name}
        </h3>
        <p className="text-Natural-400 text-xs mt-1">
          {playlist.createdAt}
        </p>
      </div>
    </div>
  );
}