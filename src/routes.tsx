import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import React from "react";
import GameDetailPage from "./pages/GameDetailPage";
const GameDetailPageLazy = React.lazy(() => import("./pages/GameDetailPage"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:id",
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
