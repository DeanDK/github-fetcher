import axios from "axios";
import { profileUrl } from "./../config";

export function getProfile(username) {
  const request = axios.get(`${profileUrl}/DeanDK`).then(res => res.data);
  return { type: "GET_PROFILE", payload: request };
}

export function getAllWines() {
  const request = axios.get(`${URL}/wines`).then(res => res.data);
  return { type: "GET_WINES", payload: request };
}
