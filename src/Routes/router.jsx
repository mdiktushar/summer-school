import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import PageNotFound from "../Pages/404/PageNotFound";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import StudentDashboard from "../Pages/Student/StudentDashboard";
import InstructorDashboard from "../Pages/Instructor/InstructorDashboard";
import { element } from "prop-types";
import AllUsers from "../Pages/Admin/AllUsers";

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
        path: `admin`,
        element: <AdminDashboard />,
      },
      {
        path: `all-users`,
        element: <AllUsers />
      },
      // Student
      {
        path: `student`,
        element: <StudentDashboard />,
      },
      // Instructor
      {
        path: "instructor",
        element: <InstructorDashboard />,
      },
    ],
  },
  {
    path: `*`,
    element: <PageNotFound />,
  },
]);

export default router;
