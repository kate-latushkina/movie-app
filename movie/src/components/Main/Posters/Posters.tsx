import React, { useEffect, useState } from "react";
import Poster from "../Poster";
import { ImovieItem, Tmovies } from "../../../interfaces/Poster.types";
import { API_URL } from "../../../variables/api";

const Posters: React.FC = () => {
  const [movies, setMovies] = useState<Tmovies>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  console.log(movies);

  return (
    <>
      {movies ? (
        movies.map(
          ({
            id,
            title,
            vote_average,
            poster_path,
            release_date,
          }: ImovieItem) => (
            <Poster
              key={id}
              release_date={release_date}
              title={title}
              vote_average={vote_average}
              poster_path={poster_path}
            />
          ),
        )
      ) : (
        <h2>No films have found here.</h2>
      )}
    </>
  );
};

export default Posters;
