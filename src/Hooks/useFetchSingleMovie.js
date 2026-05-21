import { useEffect } from "react";
import { options } from "../Constants/constants";

const useFetchSingleMovie = (setMovieDetails, movieId) => {
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
      const reviewData = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
        options,
      );
      const jsonReviewData = await reviewData.json();
      const jsonVideoData = await videoData.json();
      const movieTrailer = jsonVideoData?.results?.filter(
        (movie) => movie.type === "Trailer",
      );
      const completeMovieDetails = {
        details: jsonData,
        videoDetails: movieTrailer,
        reviews: jsonReviewData,
      };
      setMovieDetails(completeMovieDetails);
    };
    fetchMovieDetails();
  }, [movieId]);
};

export default useFetchSingleMovie;
