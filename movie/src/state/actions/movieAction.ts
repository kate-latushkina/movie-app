export interface ISetMovieAction {
  readonly type: string;
  payload: {
    id?: string | number;
    title?: string;
    overview?: string;
    movieUrl?: string;
    release_date?: string;
    genre?: string | unknown;
    vote_average?: number;
  };
}
export type MovieActions = ISetMovieAction;
