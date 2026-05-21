import React, { useEffect, useState } from "react";
import listData from "../../Data/listData";
import { IMAGE_BASE_URL, options } from "../../Constants/constants";
import convertToHrsMin from "../../Utility/convertToHrsMin";
import { Link } from "react-router";

const ListPage = () => {
  const [movies, setMovies] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  useEffect(() => {
    fetchListMovie(0);
  }, []);
  const fetchListMovie = async (index) => {
    const movieList = listData[index].movieListId;
    let promises = movieList.map((id) =>
      fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options),
    );
    const movieListDetails = await Promise.all(promises);
    promises = movieListDetails.map((movie) => movie.json());
    const jsonMovieListDetails = await Promise.all(promises);
    setMovies(jsonMovieListDetails);
  };

  return (
    <div className="flex flex-grow">
      <div className="w-[375px] p-4  bg-studio border-r border-ash/50">
        <div className="flex justify-between">
          <span className="w-11/12 font-semibold text-xl">My Lists</span>
          <button
            className="w-1/12 border border-gold-bright text-gold-bright bg-gold-tint aspect-square rounded-md"
            onClick={handleClick}
          >
            {!active ? (
              <i class="fa-solid fa-plus"></i>
            ) : (
              <i class="fa-solid fa-xmark"></i>
            )}
          </button>
        </div>
        {active && (
          <div className="mx-3 px-4 py-4 border border-gold-200/50 rounded-xl mt-10 bg-studio">
            <div class="text-semibold text-celluloid mb-2">New List</div>
            <input
              placeholder="list name"
              type="text"
              className="border border-ash/20 rounded-lg w-full py-2 px-2 bg-reel"
            />
            <div className="flex mt-3 gap-4">
              <button
                onClick={() => {
                  setActive(false);
                }}
                className="text-ash bg-reel border border-ash/20 rounded-lg px-5 py-2 font-semibold flex-grow"
              >
                Cancel
              </button>
              <button className="text-void bg-gold-bright rounded-lg px-5 py-2 font-semibold flex-grow active:scale-95 transition">
                Create
              </button>
            </div>
          </div>
        )}
        <div className="mt-5 px-3 pt-3 border-t border-grain">
          {listData.map((listItem, index) => (
            <div
              className={`flex my-4 border items-center px-2 py-4 cursor-pointer rounded-xl ${activeTab === index ? "border-gold-bright/50" : "border-reel"}`}
              onClick={() => {
                fetchListMovie(index);
                setActiveTab(index);
              }}
            >
              <div className="w-2/12 bg-gold-tint aspect-square rounded-lg m-1 mx-2 text-2xl flex items-center justify-center">
                {listItem.listIcon}
              </div>
              <div className="w-10/12">
                <div className="font-semibold">{listItem.listName}</div>
                <div className="text-xs text-ash">
                  {listItem.movieCount} Movies
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-grow p-24">
        {listData.map(
          (listItem, index) =>
            index === activeTab && (
              <>
                <div className="flex items-center">
                  <div className="w-[80px] aspect-square bg-gold-tint flex justify-center items-center mr-8 rounded-lg text-3xl">
                    {listItem.listIcon}
                  </div>
                  <div className="flex-grow">
                    <div className="font-semibold text-3xl text-celluloid">
                      {listItem.listName}
                    </div>
                    <div className="text-ash mt-2">
                      {listItem.listDescription}
                    </div>
                  </div>
                </div>
                {listItem.movieListId.map((movieId, i) =>
                  movies ? (
                    <Link to={`/movie/${movieId}`}>
                      <div className="flex my-8 py-2 px-4 border border-ash/10 bg-studio rounded-lg items-center">
                        <div className="mx-4 mr-6">{i + 1}</div>

                        <div className="p-4 w-[100px]">
                          <img
                            className="rounded-lg"
                            src={IMAGE_BASE_URL + movies[i]?.poster_path}
                            alt="movie_poster"
                          ></img>
                        </div>
                        <div className="">
                          <div className="font-2xl font-semibold text-celluloid">
                            {movies[i]?.title}
                          </div>
                          <div className="font-xs text-ash flex gap-2">
                            <span>{convertToHrsMin(movies[i]?.runtime)}</span>
                            <span>•</span>
                            <span>{movies[i]?.release_date.split("-")[0]}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div>Loading</div>
                  ),
                )}
              </>
            ),
        )}
      </div>
    </div>
  );
};

export default ListPage;
