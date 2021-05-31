import defaultMovie from "../../variables/defaultMovie";
import { MovieActions } from "../actions/movieAction";

export interface IObjectKeys {
  [key: string]: string | number | undefined;
}

export interface MovieState extends IObjectKeys {
  id?: string | number;
  title?: string;
  overview?: string;
  movieUrl?: string;
  release_date?: string;
  genre?: string;
}

const MovieReducer = (
  state: MovieState = defaultMovie,
  action: MovieActions,
) => {
  switch (action.type) {
    case "SET_MOVIE":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default MovieReducer;
