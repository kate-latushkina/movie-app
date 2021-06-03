export interface ISetAllMoviesAction {
  readonly type: string;
  payload: {
    id?: string | number;
    title?: string;
    overview?: string;
    movieUrl?: string;
    release_date?: string;
    genre?: string | unknown;
  };
}
export type AllMoviesActions = ISetAllMoviesAction;
