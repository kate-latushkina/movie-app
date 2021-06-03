import { AllMoviesActions } from "../actions/allMoviesAction";

const defaultMovie = {
  id: 0,
  title: "",
  overview: "",
  poster_path: "",
  release_date: "2021-01-01",
  genre_ids: [1],
  vote_average: 5,
};

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
  state: AllMoviesState = defaultMovie,
  action: AllMoviesActions,
) => {
  switch (action.type) {
    case "SET_ALL_MOVIES":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default AllMoviesReducer;
