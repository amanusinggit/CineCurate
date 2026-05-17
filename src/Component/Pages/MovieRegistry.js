import React from "react";
import MovieCard from "../Card/MovieCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import useFetchMovies from "../../Hooks/useFetchMovies";
import { movieTypes } from "../../Constants/constants";

const MovieRegistry = () => {
  const { heading } = useParams();

  useFetchMovies(heading);
  const movieList = useSelector((state) => {
    return state.movies[movieTypes[heading.toLowerCase()]];
  });
  return (
    <div className="p-24">
      <div className="mb-14 font-bold text-3xl text-celluloid">{heading}</div>
      <div className="flex flex-wrap gap-4">
        {movieList.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieRegistry;
