import { addMovies } from "../../variables/Api";

export default {
  addAllMovies: () => addMovies.then(res => res),
};
