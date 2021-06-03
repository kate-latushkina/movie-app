import { Grid } from "@material-ui/core";
import React, { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AllMoviesActions } from "../../../state/actions/allMoviesAction";
import { setAllMovies } from "../../../state/reducers/actionCreators";
import { AllMoviesState } from "../../../state/reducers/allMoviesReducer";
import { selectAllMovies } from "../../../state/reducers/selectors";
import { addMovies } from "../../../variables/Api";
import Poster from "./components";

const Posters: React.FC = () => {
  const [movies, setMovies] = useState<any>([]);
  const allMovieDispatch = useDispatch<Dispatch<AllMoviesActions>>();

  useEffect(() => {
    addMovies.then(res => {
      const moviesRequest = allMovieDispatch(setAllMovies(res));
      return setMovies(moviesRequest);
    });
  }, []);
  console.log(movies);
  return (
    <>
      <PostersLength>20 movies found</PostersLength>

      {movies.payload ? (
        movies.payload.map(
          ({
            id,
            title,
            vote_average,
            poster_path,
            release_date,
            overview,
            genre_ids,
          }: AllMoviesState) => (
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
