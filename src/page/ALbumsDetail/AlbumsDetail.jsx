import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Hero from "../../components/AlbumDetail/Hero";
import Musics from "../../components/AlbumDetail/Musics";

export default function AlbumsDetail() {
  const [album, setAlbum] = useState(null);
  const [isLike, setIsLike] = useState([]);
  const { albumSlug } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/albums.json");
        const data = await response.json();

        const foundAlbum = data.find(
          (item) => String(item.name.en) === albumSlug,
        );

        if (!foundAlbum) {
          navigate("/album");
          return;
        }

        setAlbum(foundAlbum);
      } catch (error) {
        console.error("Error fetching album:", error);
        navigate("/album");
      } finally {
        setLoading(false);
      }
    };

    if (albumSlug) {
      fetchData();
    }
  }, [albumSlug, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-white text-xl">در حال بارگذاری...</p>
      </div>
    );
  }

  if (!album) {
    return null;
  }
  return (
    <>
      <Hero
        name={album.name.fa}
        img={album.img}
        singer={album.singer.fa}
        time={album.date}
        musicLenght={album.musics.length}
      />
      <Musics album={album.musics} img={album.img} />
    </>
  );
}
