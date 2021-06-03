import { createSelector } from "reselect";
import { AppState } from "./rootRedicer";

const selectMovie = (state: AppState) => state;
export const selectId = createSelector(selectMovie, movieData => movieData.id);
export const selectTitle = createSelector(
  selectMovie,
  movieData => movieData.title,
);
export const selectOverview = createSelector(
  selectMovie,
  movieData => movieData.overview,
);
export const selectMovieUrl = createSelector(
  selectMovie,
  movieData => movieData.movieUrl,
);
export const selectReleaseDate = createSelector(
  selectMovie,
  movieData => movieData.release_date,
);
export const selectGenre = createSelector(
  selectMovie,
  movieData => movieData.genre,
);
