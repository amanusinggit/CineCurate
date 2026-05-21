import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Component/Pages/App";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Component/Pages/Home";
import { Provider } from "react-redux";
import store from "./app/store";
import MovieDescription from "./Component/Pages/MovieDescription";
import MovieRegistry from "./Component/Pages/MovieRegistry";
import ListPage from "./Component/Pages/ListPage";
import SearchPage from "./Component/Pages/SearchPage";
import AuthPage from "./Component/Pages/AuthPage";

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
        element: <SearchPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
      {
        path: "/movies/:heading",
        element: <MovieRegistry />,
      },
      {
        path: "/movie/:movieId",
        element: <MovieDescription />,
      },
    ],
  },
  {
    path: "/sign/:authType",
    element: <AuthPage />,
  },
]);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={browserRouterConfig} />
  </Provider>,
  /* </React.StrictMode> */
);
