export type ImovieItem = {
  id: number;
  overview: string;
  poster_path?: string;
  title: string;
  vote_average?: number;
  release_date: string;
  genre_ids: number[];
};

export type Tmovies = ImovieItem[];
