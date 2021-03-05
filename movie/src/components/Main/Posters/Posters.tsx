import React, { useEffect, useState } from "react";
import Poster from "../Poster/Poster";
import { PosterProps } from "../Poster/Poster.types";

const API_KEY = "f37ea435a74a07c3e824148f66ca3fc7";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Posters: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      });
  }, []);

  console.log(movies);

  return (
    <div>
      {movies.map((movie: PosterProps) => (
        <Poster key={movie.id} data={movie} />
      ))}
    </div>
  );
};

export default Posters;
