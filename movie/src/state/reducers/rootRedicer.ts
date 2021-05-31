import { combineReducers } from "redux";
import nameReducer from "./movieReducer";

const rootReducer = combineReducers({
  id: nameReducer,
  title: nameReducer,
  overview: nameReducer,
  movieUrl: nameReducer,
  release_date: nameReducer,
  genre: nameReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
