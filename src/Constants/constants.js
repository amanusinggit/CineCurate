import { TMDB_TOKEN } from "../credentials";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
