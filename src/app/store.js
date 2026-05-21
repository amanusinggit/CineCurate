import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/Movies/moviesSlice";
import userReducer from "../features/Movies/userSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    users: userReducer,
  },
});

export default store;
