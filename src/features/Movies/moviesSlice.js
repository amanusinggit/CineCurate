import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    topRatedMovies: [],
  },
  reducers: {
    setNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    setTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const { setNowPlayingMovies, setTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;
