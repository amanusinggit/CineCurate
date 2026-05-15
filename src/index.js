import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Component/App";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Home";
import { Provider } from "react-redux";
import store from "./app/store";
import MovieListCarousel from "./Component/MovieListCarousel";
import MovieRegistry from "./Component/MovieRegistry";

const root = ReactDOM.createRoot(document.getElementById("root"));

const browserRouterConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/search",
        element: <div>Search Page</div>,
      },
      {
        path: "/list",
        element: <div>List Page</div>,
      },
      {
        path: "/movies/:heading",
        element: <MovieRegistry />,
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={browserRouterConfig} />
  </Provider>,
  /* </React.StrictMode> */
);
