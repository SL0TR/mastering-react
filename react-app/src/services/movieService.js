// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";
const moviesEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${moviesEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(moviesEndpoint);
}

export function getMovie(id) {
  return http.get(movieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }
  return http.post(moviesEndpoint, movie);
}

export function deleteMovie(id) {
  return http.delete(movieUrl(id));
}
