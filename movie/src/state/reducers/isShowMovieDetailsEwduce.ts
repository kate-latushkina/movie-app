import { isShowMovieDetailsActions } from "../actions/isShowMovieDetailsAction";

const isShowMovieDetailsReducer = (
  state = false,
  action: isShowMovieDetailsActions,
) => {
  switch (action.type) {
    case "SHOW_MOVIE_DETAILS":
      return action.isShowMovieDetails;
    default:
      return state;
  }
};

export default isShowMovieDetailsReducer;
