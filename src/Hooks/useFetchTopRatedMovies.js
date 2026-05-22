import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../Constants/constants";
import { setTopRatedMovies } from "../features/Movies/moviesSlice";

const useFetchTopRatedMovies = (enabled) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options,
      );
      const jsonData = await data.json();
      dispatch(setTopRatedMovies(jsonData.results));
    };
    if (!enabled) return;
    fetchMovieData();
  }, [enabled, dispatch]);
};
export default useFetchTopRatedMovies;
