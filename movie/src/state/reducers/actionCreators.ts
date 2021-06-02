import { MovieState } from "./movieReducer";

const SET_MOVIE = "SET_MOVIE";

export function setMovie(movie: MovieState) {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
}
