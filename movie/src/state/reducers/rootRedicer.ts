import { combineReducers } from "redux";
import AllMoviesReducer from "./allMoviesReducer";
import isShowMovieDetailsReducer from "./isShowMovieDetailsEwduce";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  allMovies: AllMoviesReducer,
  isShowMovieDetails: isShowMovieDetailsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
