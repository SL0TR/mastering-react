// import * as genresAPI from "./genreService";
import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/auth";

export function login(user) {
  const { email, password } = user;
  return http.post(apiEndpoint, {
    email,
    password
  });
}
