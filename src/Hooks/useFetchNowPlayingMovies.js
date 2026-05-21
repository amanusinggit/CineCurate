import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../Constants/constants";
import { setNowPlayingMovies } from "../features/Movies/moviesSlice";

const useFetchNowPlayingMovies = (enabled) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        options,
      );
      const jsonData = await data.json();
      dispatch(setNowPlayingMovies(jsonData.results));
    };
    if (!enabled) return;
    fetchMovieData();
  }, []);
};

export default useFetchNowPlayingMovies;
