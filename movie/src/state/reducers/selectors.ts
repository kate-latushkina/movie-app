import { createSelector } from "reselect";
import getGenreName from "../../utils/getGenreName";
import { AllMoviesState } from "./allMoviesReducer";
import { AppState } from "./rootRedicer";

const selectMovieSelector = (state: AppState) => state.movie;
const selectMovies = (state: AppState) => state.allMovies;
const selectCategorySelector = (state: AppState) => state.category;
const selectSortingSelector = (state: AppState) => state.sorting;

export const selectMovie = createSelector(
  selectMovieSelector,
  movieData => movieData,
);

export const selectAllMovies = createSelector(
  selectMovies,
  movieData => movieData,
);

export const selectCategory = createSelector(
  selectCategorySelector,
  category => category,
);

export const selectSorting = createSelector(
  selectSortingSelector,
  sorting => sorting,
);

export const selectFilteredMovies = (
  allMovies: AllMoviesState[],
  category: string,
) => {
  const moviesSorting: AllMoviesState[] = [];
  allMovies.map((film: AllMoviesState) => {
    const correctGenre = getGenreName(film.genre_ids);
    return correctGenre.filter((item: string) => {
      if (item === category) {
        moviesSorting.push(film);
      }
      return moviesSorting;
    });
  });
  return moviesSorting;
};

export const selectSortMovies = (
  movies: AllMoviesState[],
  sort: string,
): AllMoviesState[] => {
  switch (sort) {
    case "Release date":
      movies?.sort((a: AllMoviesState, b: AllMoviesState) =>
        a.release_date < b.release_date ? 1 : -1,
      );
      break;
    case "Named":
      movies?.sort((a: AllMoviesState, b: AllMoviesState) =>
        a.title > b.title ? 1 : -1,
      );
      break;
    case "Rating":
      movies?.sort((a: AllMoviesState, b: AllMoviesState) =>
        a.vote_average < b.vote_average ? 1 : -1,
      );
      break;
    default:
      break;
  }
  return movies;
};

export const combineCurrentFilms = (
  categories: string,
  sort: string,
  allMovies: AllMoviesState[],
) => {
  let newMovies = allMovies;
  switch (categories) {
    case "All":
      newMovies = allMovies;
      break;
    case "Action":
      newMovies = selectFilteredMovies(allMovies, categories);
      break;
    case "Comedy":
      newMovies = selectFilteredMovies(allMovies, categories);
      break;
    case "Horror":
      newMovies = selectFilteredMovies(allMovies, categories);
      break;
    case "Crime":
      newMovies = selectFilteredMovies(allMovies, categories);
      break;
    default:
      break;
  }
  return selectSortMovies(newMovies, sort);
};
