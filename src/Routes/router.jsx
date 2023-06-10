import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/404/PageNotFound";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Admin/AllUsers";
import AddClass from "../Pages/Instructor/AddClass";
import SelectedClasses from "../Pages/Student/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/Student/EnrolledClasses/EnrolledClasses";
import MyClasses from "../Pages/Instructor/MyClasses";

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
  // Dashboard
  {
    path: `/dashboard`,
    element: <DashboardLayout />,
    children: [
      // Admin
      {
        path: `all-users`,
        element: <AllUsers />,
      },
      // Student
      {
        path: `enrolled-classes`,
        element: <EnrolledClasses />,
      },
      {
        path: `selected-classes`,
        element: <SelectedClasses />,
      },
      // Instructor
      {
        path: `my-classes`,
        element: <MyClasses />,
      },
      {
        path: `add-class`,
        element: <AddClass />,
      },
    ],
  },
  {
    path: `*`,
    element: <PageNotFound />,
  },
]);

export default router;
