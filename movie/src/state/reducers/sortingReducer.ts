import { SortingActions } from "../actions/sortingAction";

const SortingReducer = (state = "Rating", action: SortingActions) => {
  switch (action.type) {
    case "SET_SORTING":
      return action.sorting;
    default:
      return state;
  }
};

export default SortingReducer;
