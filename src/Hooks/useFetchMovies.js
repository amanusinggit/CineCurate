import useFetchNowPlayingMovies from "./useFetchNowPlayingMovies";
import useFetchTopRatedMovies from "./useFetchTopRatedMovies";

const useFetchMovies = (type) => {
  console.log(type, type === "Now Playing Movies");
  useFetchNowPlayingMovies(type === "Now Playing Movies");
  useFetchTopRatedMovies(type === "Top Rated Movies");
};

export default useFetchMovies;
