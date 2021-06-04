import { combineReducers } from "redux";
import AllMoviesReducer from "./allMoviesReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  allMovies: AllMoviesReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
