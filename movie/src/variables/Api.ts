import { Request } from "./Request";

const API_KEY = "f37ea435a74a07c3e824148f66ca3fc7";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const API_IMG = "https://image.tmdb.org/t/p/original";

export { API_KEY, API_URL, API_IMG };

export const { addMovies, sentMovie, deleteMovie, putMovie } = {
  addMovies: Request.getRequest(API_URL),
  sentMovie: Request.postRequest(API_URL, {}),
  deleteMovie: Request.deleteRequest(API_URL, {}),
  putMovie: Request.putRequest(API_URL, {}),
};
