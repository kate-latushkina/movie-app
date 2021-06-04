import defaultAllMoviesArray from "../../variables/defaultAllMoviesArray";
import { AllMoviesActions } from "../actions/allMoviesAction";

export interface IObjectKeys {
  [key: string]: string | number | number[];
}

export interface AllMoviesState extends IObjectKeys {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
}

const AllMoviesReducer = (
  state: AllMoviesState[] = defaultAllMoviesArray,
  action: AllMoviesActions,
) => {
  switch (action.type) {
    case "SET_ALL_MOVIES":
      return action.payload;
    default:
      return state;
  }
};

export default AllMoviesReducer;
