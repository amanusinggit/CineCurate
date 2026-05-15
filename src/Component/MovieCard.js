import React from "react";
import { imageBaseUrl } from "../Constants/constants";

const MovieCard = ({ movie }) => {
  return (
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
  );
};

export default MovieCard;
