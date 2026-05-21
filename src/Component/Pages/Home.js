import { useSelector } from "react-redux";
import useFetchNowPlayingMovies from "../../Hooks/useFetchNowPlayingMovies";
import Rating from "../Miscellaneous/Rating";
import MovieListCarousel from "../Carousel/MovieListCarousel";
import { useNavigate } from "react-router";
import { IMAGE_BASE_URL } from "../../Constants/constants";

const Home = () => {
  const navigate = useNavigate();
  const navigateToMovieDescription = () => {
    navigate(`/movie/${movieData[0]?.id}`);
  };
  const movieData = useSelector((state) => {
    return state.movies.nowPlayingMovies;
  });
  useFetchNowPlayingMovies(true);
  return (
    <div className="relative z-0">
      <div className="p-24 mb-8 relative">
        <div className="absolute inset-0  bg-[radial-gradient(ellipse_at_60%_50%,#E8C54712_0%,transparent_60%),radial-gradient(ellipse_at_10%_80%,#E0525215_0%,transparent_40%)]"></div>
        <div className="child flex">
          <div className="w-[60%] pr-12 text-ash relative z-10">
            <div className="text-gold-200 rounded-3xl bg-gold-tint border border-gold-200 inline-block px-9 py-1 mb-6">
              FEATURED FILM
            </div>
            <div className="font-bold text-6xl my-5 text-celluloid">
              {movieData[0]?.original_title}
            </div>
            <p className="my-7">{movieData[0]?.overview}</p>
            <div className="flex gap-10">
              <Rating movieRating={movieData[0]?.vote_average} />
              <div>{movieData[0]?.vote_average.toFixed(1)}</div>
              <div>{movieData[0]?.release_date?.split("-")[0]}</div>
              {/* <div>genre</div> */}
              {/* <div>duration</div> */}
            </div>
            <div className="flex gap-4 my-10">
              <button className="px-5 py-2 bg-gold-bright text-black rounded-lg font-bold">
                <i className="fa-solid fa-plus px-1"></i>Add To List
              </button>
              <button
                className="px-5 py-2 border border-frame rounded-lg bg-reel"
                onClick={navigateToMovieDescription}
              >
                View Details
              </button>
            </div>
          </div>
          <div className="w-[40%] flex">
            <div className="relative p-8 flex items-center justify-center">
              <div className="absolute rounded-3xl inset-0 bg-gold-glow from-gold-tint to-reel border-[#F0EEE81A] border"></div>
              <img
                src={IMAGE_BASE_URL + movieData[0]?.backdrop_path}
                alt="Movie Poster"
                className="rounded-3xl relative z-10"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <MovieListCarousel heading={"Top Rated Movies"} />
      <MovieListCarousel heading={"Now Playing Movies"} />
    </div>
  );
};

export default Home;
