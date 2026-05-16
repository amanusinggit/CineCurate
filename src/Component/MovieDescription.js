import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMDB_URL, options } from "../Constants/constants";

const LinkTab = ({ movie }) => {
  return (
    <div className="">
      {movie?.imdb_id && (
        <a
          href={IMDB_URL + movie.imdb_id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative overflow-hidden w-4/12 border-2 border-l-8 border-gold-bright rounded-lg px-6 py-4 my-4 text-gold-bright group cursor-pointer">
            <span className="absolute inset-0 bg-gold-bright origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-void">
              IMDB
            </span>
          </div>
        </a>
      )}
      {movie.homepage && (
        <a href={movie?.homepage} target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden w-4/12 border-2 border-l-8 border-gold-bright rounded-lg px-6 py-4 my-4 text-gold-bright group cursor-pointer">
            <span className="absolute inset-0 bg-gold-bright origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-void">
              HOMEPAGE
            </span>
          </div>
        </a>
      )}
    </div>
  );
};

const MovieDescription = () => {
  const { movieId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [movieDetails, setMovieDetails] = useState();
  function convertToHrsMin(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    if (hours === 0) {
      return `${minutes} min`;
    }

    if (minutes === 0) {
      return `${hours} hr`;
    }

    return `${hours} hr ${minutes} min`;
  }
  useEffect(() => {
    const fetchMovieDetails = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options,
      );
      const jsonData = await data.json();
      const videoData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        options,
      );
      const jsonVideoData = await videoData.json();
      const movieTrailer = jsonVideoData.results.filter(
        (movie) => movie.type === "Trailer",
      );
      const completeMovieDetails = {
        details: jsonData,
        videoDetails: movieTrailer,
      };
      setMovieDetails(completeMovieDetails);
      console.log(completeMovieDetails);
    };
    fetchMovieDetails();
  }, [movieId]);

  const tabData = [
    { tabHeading: "Details", Component: <div>details</div> },
    {
      tabHeading: "Links",
      Component: <LinkTab movie={movieDetails?.details} />,
    },
  ];

  return (
    <div>
      <div className="relative h-[75vh] overflow-hidden mb-10">
        <iframe
          className="absolute top-[-10%] w-full h-[120%]"
          src={`https://www.youtube.com/embed/${movieDetails?.videoDetails[0]?.key}?si=aNvPdrqpK3iXAkyv&amp&controls=0&autoplay=1&mute=1&loop=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-r from-void to-transparent"></div>
        <div className="absolute bottom-[0%] w-[40%] pl-24 p-10 ">
          <div className="text-celluloid font-bold text-4xl my-5">
            {movieDetails?.details?.title}
          </div>
          <div className="text-ash">{movieDetails?.details?.overview}</div>
          <div className="flex gap-4 my-2">
            {movieDetails?.details?.genres.map((genre) => (
              <span className="">{genre.name}</span>
            ))}
          </div>
          <div className="my-2 flex gap-4">
            <span>{movieDetails?.details?.release_date}</span>
            <span>•</span>
            <span>{movieDetails?.details?.vote_average.toFixed(1)}</span>
            <span>•</span>
            <span>{convertToHrsMin(movieDetails?.details?.runtime)}</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex gap-10 border-b border-ash/35 px-24">
          {tabData.map((tab, index) => (
            <div
              className={`p-4  text-celluloid border-b-4 border-black/0 hover:text-gold-bright hover:border-b-4 hover:border-gold-bright ${activeTab === index ? "border-b-4 border-gold-bright" : ""}`}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {tab.tabHeading}
            </div>
          ))}
        </div>
        <div className="px-24 py-12">
          {tabData.map((tab, index) => activeTab === index && tab.Component)}
        </div>
      </div>
    </div>
  );
};

export default MovieDescription;
