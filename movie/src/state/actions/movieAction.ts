export interface ISetMovieAction {
  readonly type: "SET_MOVIE";
  payload: {
    id?: string | number;
    title?: string;
    overview?: string;
    movieUrl?: string;
    release_date?: string;
    genre?: string | unknown;
  };
}
export type MovieActions = ISetMovieAction;
