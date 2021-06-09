import { Dispatch } from "redux";
import { AllMoviesState } from "./allMoviesReducer";
import { MovieState } from "./movieReducer";
import { addMovies, API_KEY } from "../../variables/Api";
import { Request } from "../../variables/Request";

const SET_MOVIE = "SET_MOVIE";
const SET_ALL_MOVIES = "SET_ALL_MOVIES";

export function setMovie(movie: MovieState) {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
}

export function setAllMovies(movies: AllMoviesState[]) {
  return {
    type: SET_ALL_MOVIES,
    payload: movies,
  };
}

export const getAllMovies = () => async (dispatch: Dispatch) => {
  const result = await addMovies.then(res => res);
  dispatch(setAllMovies(result));
};

export const getSearchMovies = (searchValue: string) => async (
  dispatch: Dispatch,
) => {
  const GET_SEARTCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchValue}&page=1&include_adult=false`;

  const result = await Request.getRequest(GET_SEARTCH).then(res => res);
  dispatch(setAllMovies(result));
};
