import { useEffect, useState } from "react";
import { catchErrors } from "../utils";

const useTopGenres = (topArtists) => {
  const [topGenres, setTopGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      if (!topArtists) return;

      const genreArtistsMap = {};

      topArtists.items.forEach((artist) => {
        artist.genres.forEach((genre) => {
          if (!genreArtistsMap[genre]) {
            genreArtistsMap[genre] = [];
          }
          genreArtistsMap[genre].push(artist);
        });
      });

      const sortedGenres = Object.entries(genreArtistsMap).sort(
        (a, b) => b[1].length - a[1].length
      );

      setTopGenres(sortedGenres);
    };

    catchErrors(fetchGenres());
  }, [topArtists]);

  return topGenres;
};

export default useTopGenres;