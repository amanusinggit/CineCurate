import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import MovieCard from "../Card/MovieCard";
import { movieTypes } from "../../Constants/constants";
import useFetchMovies from "../../Hooks/useFetchMovies";

const MovieListCarousel = ({ heading }) => {
  const movieList = useSelector((state) => {
    return state.movies[movieTypes[heading.toLowerCase()]];
  });
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movies/${heading}`);
  };
  useFetchMovies(movieTypes[heading.toLowerCase()]);
  return (
    <div className="px-24 py-12">
      <div className="flex justify-between py-8">
        <div className="font-bold text-2xl">{heading}</div>
        <button
          className="text-gold-200"
          onClick={() => {
            handleClick();
          }}
        >
          See All<i className="fa-solid fa-arrow-right-long mx-3"></i>
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto flex-nowrap p-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieListCarousel;
