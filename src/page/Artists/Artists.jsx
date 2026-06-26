import React, { useEffect, useState } from "react";
import ArtistBox from "../../components/Common/ArtistBox/ArtistBox";
import TitleHeader from "../../components/Common/TitleHeader/TitleHeader";

import TrendMusic from "../../components/Artist/TrendMusic/TrendMusic";
import NewestMusic from "../../components/Artist/NewestMusic/NewestMusic";
import AllMusic from "../../components/Artist/AllMusic/AllMusic";

export default function Artists() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("data/artists.json");
      const data = await response.json();
      setArtists(data);
    };
    fetchData();
  }, []);
  return (
    <>
      {/* Trend Artist */}
      <TrendMusic artists={artists}/>
      {/* Newest Artist */}
      <NewestMusic artists={artists}/>
      {/* All Artist */}
      <AllMusic artists={artists}/>
    </>
  );
}
