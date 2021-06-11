import { CategoryActions } from "../actions/categoryAction";

const CategoryReducer = (state = "All", action: CategoryActions) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return action.category;
    default:
      return state;
  }
};

export default CategoryReducer;
