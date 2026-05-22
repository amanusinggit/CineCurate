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
      className="flex flex-col flex-shrink-0 flex-grow-0 basis-[10%] rounded-lg min-w-0 cursor-pointer"
      onClick={() => {
        handleClick();
      }}
    >
      <div key={movie?.id} className="flex flex-grow">
        {movie?.poster_path ? (
          <img
            className="rounded-lg"
            src={IMAGE_BASE_URL + movie.poster_path}
            alt={movie.original_title}
          />
        ) : (
          <div className="bg-reel flex-grow rounded-lg text-xs text-ash flex items-center justify-center">
            image unavailable
          </div>
        )}
      </div>
      <div className="truncate font-bold text-celluloid py-4">
        {movie?.title}
      </div>
    </div>
  );
};

export default MovieCard;
