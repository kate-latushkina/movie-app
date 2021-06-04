import _ from "lodash";
import { MovieState } from "../../state/reducers/movieReducer";

const addInputToState = (inp: MovieState): MovieState => {
  return _.transform(
    inp,
    (result: MovieState, val: string | undefined | number, key: string) => {
      result[key] = val;
    },
  );
};

export default addInputToState;
