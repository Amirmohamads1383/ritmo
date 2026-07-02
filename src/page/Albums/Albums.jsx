import React, { useEffect, useState } from "react";
import TrendAlbums from "../../components/Albums/TrendAlbums/TrendAlbums";
import NewestAlbums from "../../components/Albums/NewestAlbums/NewestAlbums";
import AllAlbums from "../../components/Albums/AllAlbums/AllAlbums";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/albums.json");
      const data = await response.json();
      setAlbums(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Trend Album */}
      <TrendAlbums albums={albums} />
      {/* Newest Album */}
      <NewestAlbums albums={albums} />
      {/* All Albums */}
      <AllAlbums albums={albums} />
    </>
  );
}
