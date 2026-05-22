import React, { useState } from "react";
import { useParams } from "react-router";
import LinkTab from "../Tab Items/LinkTab";
import ReviewsTab from "../Tab Items/ReviewTab";
import convertToHrsMin from "../../Utility/convertToHrsMin";
import useFetchSingleMovie from "../../Hooks/useFetchSingleMovie";

const MovieDescription = () => {
  const { movieId } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [movieDetails, setMovieDetails] = useState();

  const tabData = [
    {
      tabHeading: "Reviews",
      Component: <ReviewsTab reviews={movieDetails?.reviews} />,
    },
    {
      tabHeading: "Links",
      Component: <LinkTab movie={movieDetails?.details} />,
    },
  ];

  useFetchSingleMovie(setMovieDetails, movieId);

  return movieDetails ? (
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
  ) : (
    <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin"></div>
    </div>
  );
};

export default MovieDescription;
