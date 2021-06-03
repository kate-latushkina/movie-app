import { createSelector } from "reselect";
import { AppState } from "./rootRedicer";

const selectMovieSelector = (state: AppState) => state.movie;
const selectMovies = (state: AppState[]) => state;

export const selectMovie = createSelector(
  selectMovieSelector,
  movieData => movieData,
);

export const selectAllMovies = createSelector(
  selectMovies,
  movieData => movieData,
);
