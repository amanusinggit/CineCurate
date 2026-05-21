import useFetchNowPlayingMovies from "./useFetchNowPlayingMovies";
import useFetchTopRatedMovies from "./useFetchTopRatedMovies";

const useFetchMovies = (type) => {
  useFetchNowPlayingMovies(type === "nowPlayingMovies");
  useFetchTopRatedMovies(type === "topRatedMovies");
};

export default useFetchMovies;
