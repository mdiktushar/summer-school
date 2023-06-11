import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const AuthForbidden = ({ children }) => {
  const { user, loading } = useAuth();

  if (!user) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AuthForbidden;
