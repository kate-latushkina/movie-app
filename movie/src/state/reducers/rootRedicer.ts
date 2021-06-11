import { combineReducers } from "redux";
import AllMoviesReducer from "./allMoviesReducer";
import CategoryReducer from "./categoryReducer";
import movieReducer from "./movieReducer";
import SortingReducer from "./sortingReducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  allMovies: AllMoviesReducer,
  category: CategoryReducer,
  sorting: SortingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
