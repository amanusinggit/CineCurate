import useFetchNowPlayingMovies from "./useFetchNowPlayingMovies";
import useFetchTopRatedMovies from "./useFetchTopRatedMovies";

const useFetchMovies = (type) => {
  console.log(type, type === "Now Playing Movies");
  useFetchNowPlayingMovies(type === "nowPlayingMovies");
  useFetchTopRatedMovies(type === "topRatedMovies");
};

export default useFetchMovies;
