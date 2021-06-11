import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAllMovies } from "../../../state/reducers/actionCreators";
import { AllMoviesState } from "../../../state/reducers/allMoviesReducer";
import {
  combineCurrentFilms,
  selectAllMovies,
  selectCategory,
  selectSorting,
} from "../../../state/reducers/selectors";
import Poster from "./components";

const Posters: React.FC = () => {
  const movies: AllMoviesState[] = useSelector(selectAllMovies);
  const category = useSelector(selectCategory);
  const sotring = useSelector(selectSorting);
  const dispatch = useDispatch();
  const getRelewantMovies: AllMoviesState[] = combineCurrentFilms(
    category,
    sotring,
    movies,
  );

  useEffect(() => {
    dispatch(getAllMovies());
  }, []);

  return (
    <>
      <PostersLength>{getRelewantMovies.length} movies found</PostersLength>

      {getRelewantMovies ? (
        getRelewantMovies.map(
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
