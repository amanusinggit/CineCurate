import React, { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { GEMNI_API_KEY } from "../../credentials";
import { options } from "../../Constants/constants";
import MovieCard from "../Card/MovieCard";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState(null);
  const ai = new GoogleGenAI({ apiKey: GEMNI_API_KEY });

  const fetchMovieDetails = async (movies) => {
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
  };

  const fetchGemniResponse = async (prompt) => {
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
      console.log(error);
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
            className="text-void bg-gold-bright rounded-lg px-5 py-2 font-semibold"
            onClick={() => {
              fetchGemniResponse(searchText);
            }}
          >
            search
          </button>
        </div>

        {movieList ? (
          <div className="flex flex-wrap gap-8 p-24">
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
