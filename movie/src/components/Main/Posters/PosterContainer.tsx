import React, { useEffect, useState } from "react";
import { API_URL } from "../../../variables/Api";
import Poster from "./components";
import { ImovieItem, Tmovies } from "./components/Poster.types";
import { Request } from "../../../variables/Request";

const Posters: React.FC = () => {
  const [movies, setMovies] = useState<Tmovies>([]);

  async function getMoviesArray() {
    return setMovies(await Request.getRequest(API_URL));
  }

  useEffect(() => {
    getMoviesArray();
  }, []);

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
