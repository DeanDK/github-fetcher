import axios from "axios";
import { profileUrl } from "./../config";

export function getProfile(username) {
  const request = axios
    .get(`${profileUrl}/${username}`)
    .then(res => res.data)
    .catch(err => Promise.reject({ status: 500, message: "Invalid name" }));

  return { type: "GET_PROFILE", payload: request };
}

export function getRepos(username) {
  const request = axios
    .get(`${profileUrl}/${username}/repos`)
    .then(res => res.data)
    .catch(err =>
      Promise.reject({ status: 500, message: "Something went wrong" })
    );

  return { type: "GET_REPOS", payload: request };
}
