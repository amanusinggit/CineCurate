export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const movieTypes = {
  "top rated movies": "topRatedMovies",
  "now playing movies": "nowPlayingMovies",
};

export const IMDB_URL = "https://www.imdb.com/title/";
