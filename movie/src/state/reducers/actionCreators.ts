import { AllMoviesState } from "./allMoviesReducer";
import { MovieState } from "./movieReducer";
import moviesData from "./addMovies";

const SET_MOVIE = "SET_MOVIE";
const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export function setMovie(movie: MovieState) {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
}

export function setAllMovies(movies: AllMoviesState) {
  return {
    type: SET_ALL_MOVIES,
    payload: movies,
  };
}

export const getAllMovies = () => async (dispatch: any) => {
  dispatch(setAllMovies(await moviesData.addAllMovies()));
};
