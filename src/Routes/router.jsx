import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/404/PageNotFound";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      // Auth
      {
        path: `login`,
        element: <Login />,
      },
      {
        path: `signup`,
        element: <SignUp />,
      },
    ],
  },
  {
    path: `*`,
    element: <PageNotFound />,
  },
]);

export default router;
