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
import ManageClasses from "../Pages/Admin/ManageClasses";
import AllClasses from "../Pages/AllClasses/AllClasses";
import PaymentHistory from "../Pages/Student/PaymentHistory/PaymentHistory";
import AllInstructor from "../Pages/AllInstructor/AllInstructor";
import AuthForbidden from "./AuthForbidden";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";

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
        element: (
          <AuthForbidden>
            {" "}
            <Login />
          </AuthForbidden>
        ),
      },
      {
        path: `signup`,
        element: (
          <AuthForbidden>
            <SignUp />
          </AuthForbidden>
        ),
      },
      {
        path: `all-classes`,
        element: <AllClasses />,
      },
      {
        path: `all-instructors`,
        element: <AllInstructor />,
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
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: `manage-classes`,
        element: (
          <AdminRoute>
            <ManageClasses />
          </AdminRoute>
        ),
      },
      // Student
      {
        path: `enrolled-classes`,
        element: (
          <StudentRoute>
            <EnrolledClasses />
          </StudentRoute>
        ),
      },
      {
        path: `selected-classes`,
        element: (
          <StudentRoute>
            <SelectedClasses />
          </StudentRoute>
        ),
      },
      {
        path: `payment-history`,
        element: (
          <StudentRoute>
            <PaymentHistory />
          </StudentRoute>
        ),
      },
      // Instructor
      {
        path: `my-classes`,
        element: (
          <InstructorRoute>
            <MyClasses />
          </InstructorRoute>
        ),
      },
      {
        path: `add-class`,
        element: (
          <InstructorRoute>
            <AddClass />
          </InstructorRoute>
        ),
      },
    ],
  },
  {
    path: `*`,
    element: <PageNotFound />,
  },
]);

export default router;
