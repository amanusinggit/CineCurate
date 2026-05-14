import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../Constants/constants";
import { setTopRatedMovies } from "../features/Movies/moviesSlice";

const useFetchTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovieData = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options,
      );
      const jsonData = await data.json();
      console.log(jsonData);
      dispatch(setTopRatedMovies(jsonData.results));
    };
    fetchMovieData();
  }, []);
};
export default useFetchTopRatedMovies;
