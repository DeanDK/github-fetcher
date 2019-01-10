import axios from "axios";
import { profileUrl } from "./../config";

export function getProfile(username) {
  const request = axios
    .get(`${profileUrl}/${username}`)
    .then(res => res.data)
    .catch(err => Promise.reject({ status: 500, message: "Invalid name" }));

  return { type: "GET_PROFILE", payload: request };
}
