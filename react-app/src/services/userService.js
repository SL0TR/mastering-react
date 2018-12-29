// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/users";

export function register(user) {
  const { email, password } = user;
  return http.post(apiEndpoint, {
    email,
    password,
    name: user.username
  });
}
