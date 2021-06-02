import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addMovies } from "../../../variables/Api";
import Poster from "./components";
import { ImovieItem, Tmovies } from "./components/Poster.types";

const Posters: React.FC = () => {
  const [movies, setMovies] = useState<Tmovies>([]);

  useEffect(() => {
    addMovies.then(res => setMovies(res));
  }, []);

  return (
    <>
      <PostersLength>{movies.length} movies found</PostersLength>
      {movies ? (
        movies.map(
          ({
            id,
            title,
            vote_average,
            poster_path,
            release_date,
            overview,
            genre_ids,
          }: ImovieItem) => (
            <Poster
              key={id}
              release_date={release_date}
              title={title}
              vote_average={vote_average}
              poster_path={poster_path}
              id={id}
              overview={overview}
              genre_ids={genre_ids}
            />
          ),
        )
      ) : (
        <h2>No films have found here.</h2>
      )}
    </>
  );
};

export const PostersLength = styled(Grid)`
  width: 100%;
  margin: 10px 0 20px;
`;

export default Posters;
