import React, { useEffect, useState } from "react";

const API_KEY = "f37ea435a74a07c3e824148f66ca3fc7";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

const Poster: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setMovies(data);
      });
  }, []);

  return (
    <>
    <ul>
      {movies.map((movie: any) => (
        <li>{movie.title}</li>
      ))}
    </ul>
    <span>Hello</span>
    </>
  );
};

export default Poster;
