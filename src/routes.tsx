import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import React from "react";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
const GameDetailPageLazy = React.lazy(() => import("./pages/GameDetailPage"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        // element: (
        //   <React.Suspense fallback={<div>Loading...</div>}>
        //     <GameDetailPageLazy />
        //   </React.Suspense>
        // ),
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default routes;
