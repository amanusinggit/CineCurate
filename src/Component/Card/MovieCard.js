import React from "react";
import { IMAGE_BASE_URL } from "../../Constants/constants";
import { useNavigate } from "react-router";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div
      className="flex-shrink-0 flex-grow-0 basis-[10%] rounded-lg min-w-0"
      onClick={() => {
        handleClick();
      }}
    >
      <div key={movie.id} className="">
        <img
          className="rounded-lg"
          src={IMAGE_BASE_URL + movie.poster_path}
          alt={movie.original_title}
        />
      </div>
      <div className="truncate font-bold text-celluloid py-4">
        {movie.original_title}
      </div>
    </div>
  );
};

export default MovieCard;
