import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { options } from "../../Constants/constants";
import MovieCard from "../Card/MovieCard";

const ShimmerMovieLoading = () => {
  return (
    <div className="flex flex-wrap gap-8 p-24">
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="basis-[200px] h-72 bg-gold-glow from-gold-tint to-reel border-[#F0EEE81A] border rounded-3xl"
        ></div>
      ))}
    </div>
  );
};

const SearchPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState(null);
  const ai = new GoogleGenAI({ apiKey: process.env.REACT_APP_GEMNI_API_KEY });

  const fetchMovieDetails = async (movies) => {
    setLoading(true);
    try {
      let promises = movies.map((movieName) =>
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
          options,
        ),
      );
      const movieData = await Promise.all(promises);
      promises = movieData.map((movie) => movie.json());
      const jsonMovieData = await Promise.all(promises);
      setMovieList(jsonMovieData);
    } catch (error) {
      console.log("error fetching movie details", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchGemniResponse = async (prompt) => {
    setError(null);
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseJsonSchema: {
            type: "object",
            properties: {
              movies: {
                type: "array",
                minItems: 10,
                items: { type: "string" },
              },
            },
            required: ["movies"],
            additionalProperties: false,
          },
        },
      });
      const movies = JSON.parse(response.text).movies;
      fetchMovieDetails(movies);
    } catch (error) {
      setError("SOME BACKEND ERROR OCCURRED. PLEASE TRY AGAIN.");
      console.log(error.message);
    }
  };
  return (
    <div className="relative py-40">
      <div className="bg-gradient-to-b from-studio to-transparent inset-0 absolute"></div>
      <div className="z-10 relative">
        <div className="text-5xl font-semibold text-celluloid text-center mt-6 py-2">
          Discover Movies
        </div>
        <div className="text-xl text-ash text-center py-2">
          Using the power of LLMs to suggest you a movie based on your mood.
        </div>
        <div className="flex justify-center my-10 gap-5">
          <div className="relative w-8/12 ">
            <span className="absolute top-0 px-6 py-3">
              <i class="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="search for movies"
              className="px-14 py-3 bg-reel border border-grain rounded-xl w-full"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
            ></input>
          </div>
          <button
            className="text-void bg-gold-bright rounded-lg px-5 py-2 font-semibold active:scale-95 transition"
            onClick={() => {
              fetchGemniResponse(searchText);
            }}
          >
            search
          </button>
        </div>

        {error ? (
          <div className="text-center text-red-500 p-24">{error}</div>
        ) : loading ? (
          <ShimmerMovieLoading />
        ) : movieList ? (
          <div className="flex flex-wrap gap-8 p-24 ">
            {movieList?.map((movie) => {
              return (
                movie?.total_results > 0 && (
                  <MovieCard
                    key={movie?.results[0]?.id}
                    movie={movie?.results[0]}
                  />
                )
              );
            })}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
