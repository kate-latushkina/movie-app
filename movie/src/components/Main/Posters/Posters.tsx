import React, { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import { ImovieItem, Tmovies } from "../Poster/Poster.types";

const API_KEY = "f37ea435a74a07c3e824148f66ca3fc7";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Posters: React.FC = () => {
  const [movies, setMovies] = useState<Tmovies>([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div>
      {movies ? (
        movies.map(
          ({ id, name, description, vote, urlImg, date }: ImovieItem) => (
            <Poster
              key={id}
              date={date}
              name={name}
              description={description}
              vote={vote}
              urlImg={urlImg}
            />
          ),
        )
      ) : (
        <h2>No films have found here.</h2>
      )}
    </div>
  );
};

export default Posters;
