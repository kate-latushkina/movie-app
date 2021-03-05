import React from "react";
import { PosterProps } from "./Poster.types";

const Poster: React.FC = (props: PosterProps) => {
  const { title, vote_average, overview, poster_path } = props;
  return (
    <>
      <img src={poster_path} alt="poster" />
      <h3>{title}</h3>
      <span>{vote_average}</span>
      <p>{overview}</p>
    </>
  );
};

export default Poster;
