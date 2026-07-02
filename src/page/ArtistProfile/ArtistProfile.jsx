import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Hero from "../../components/ArtistProfile/Hero/Hero";
import NewMusic from "../../components/ArtistProfile/NewMusic/NewMusic";
import Albums from "../../components/ArtistProfile/Albums/Albums";

export default function ArtistProfile() {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { artistSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/artists.json");
        const data = await response.json();

        const foundArtist = data.find((item) => item.name.en === artistSlug);

        if (!foundArtist) {
          navigate("/artist");
          return;
        }

        setArtist(foundArtist);
      } catch (error) {
        console.error("Error fetching artist:", error);
        navigate("/artist");
      } finally {
        setLoading(false);
      }
    };

    if (artistSlug) {
      fetchData();
    }
  }, [artistSlug, navigate]);

  if (loading) {
    return (
      <div className="container py-16 text-center">
        <p className="text-white">در حال بارگذاری...</p>
      </div>
    );
  }

  if (!artist) {
    return (
      <div className="container py-16 text-center">
        <p className="text-white">آرتیست مورد نظر یافت نشد</p>
      </div>
    );
  }

  return (
    <>
      <Hero
        name={artist.name.fa}
        img={artist.img}
        desc={artist.desc}
        cat={artist.category.fa}
      />
      <NewMusic artistSlug={artistSlug} />
      <Albums artistSlug={artistSlug} />
    </>
  );
}
