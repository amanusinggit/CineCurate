import React, { useEffect } from "react";
import { imageBaseUrl, options } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { setTopRatedMovies } from "../features/Movies/moviesSlice";
import useFetchTopRatedMovies from "../Hooks/useFetchTopRatedMovies";

const MovieListCarousel = ({ heading }) => {
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  useFetchTopRatedMovies();
  return (
    <div className="p-24">
      <div className="flex justify-between py-8">
        <div className="font-bold text-2xl">{heading}</div>
        <button className="text-gold-200">
          See All<i className="fa-solid fa-arrow-right-long mx-3"></i>
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto flex-nowrap p-4">
        {topRatedMovies.map((movie) => (
          <div className="flex-shrink-0 flex-grow-0 basis-[10%] rounded-lg min-w-0 ">
            <div key={movie.id} className="">
              <img
                className="rounded-lg"
                src={imageBaseUrl + movie.poster_path}
                alt={movie.original_title}
              />
            </div>
            <div className="truncate font-bold text-celluloid py-4">
              {movie.original_title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieListCarousel;
