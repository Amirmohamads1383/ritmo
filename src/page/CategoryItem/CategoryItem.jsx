import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import Hero from "../../components/CategoryItem/Hero/Hero";
import Artists from "../../components/CategoryItem/Artists/Artists";
import NewstMusic from "../../components/CategoryItem/NewestMusic/NewstMusic";
import TrendMusic from "../../components/CategoryItem/TrendMusic/TrendMusic";
import AllMusic from "../../components/CategoryItem/AllMusic/AllMusic";

export default function CategoryItem() {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState(null);
  const [artists, setArtists] = useState([]);
  const [musics, setMusics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingArtists, setLoadingArtists] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/category.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const foundCategory = data.find((cat) => cat.title.en === categorySlug);

        if (!foundCategory) {
          setError("دسته‌بندی مورد نظر یافت نشد");
        }

        setCategory(foundCategory);
      } catch (error) {
        console.error("Error loading category:", error);
        setError("خطا در بارگذاری اطلاعات: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categorySlug]);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        setLoadingArtists(true);
        const response = await fetch("/data/artists.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filteredArtists = data.filter(
          (artist) => artist.category.en === categorySlug,
        );

        setArtists(filteredArtists);
      } catch (error) {
        console.error("Error loading artists:", error);
        setArtists([]);
      } finally {
        setLoadingArtists(false);
      }
    };

    if (category && !error) {
      fetchArtistsData();
    }
  }, [category, categorySlug, error]);

  useEffect(() => {
    const fetchMusicsData = async () => {
      try {
        setLoadingArtists(true);
        const response = await fetch("/data/musics.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const filteredMusics = data.filter(
          (music) => music.category.en === categorySlug,
        );

        setMusics(filteredMusics);
        setVisibleCount(12);
      } catch (error) {
        console.error("Error loading artists:", error);
      } finally {
        setLoadingArtists(false);
      }
    };

    if (category && !error) {
      fetchMusicsData();
    }
  }, [category, categorySlug, error]);

  if (loading) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="text-center text-gray-500">در حال بارگذاری...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </section>
    );
  }

  if (!category) {
    return (
      <section className="py-16">
        <div className="container">
          <div className="text-center text-red-500">
            دسته‌بندی "{categorySlug}" یافت نشد!
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Intro */}
      <Hero category={category} />

      {/* Artist */}
      <Artists artists={artists} category={category} />

      {/* Newest Music */}
      <NewstMusic category={category} musics={musics} />

      {/* Trend Music */}
      <TrendMusic musics={musics} />

      {/* All Music */}
      <AllMusic musics={musics} />
    </>
  );
}
