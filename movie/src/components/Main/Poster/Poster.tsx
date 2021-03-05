import React from "react";
import { ImovieItem } from "./Poster.types";

const Poster: React.FC = (props: ImovieItem) => {
  const { name, vote, description, urlImg } = props;
  return (
    <>
      <img src={urlImg} alt="poster" />
      <h3>{name}</h3>
      <span>{vote}</span>
      <p>{description}</p>
    </>
  );
};

export default Poster;
