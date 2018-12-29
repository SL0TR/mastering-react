// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";
const moviesEndpoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(id) {
  return http.get(moviesEndpoint + "/" + id);
}

export function saveMovie(movie) {
  return http.post(moviesEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(moviesEndpoint + "/" + id);
}
