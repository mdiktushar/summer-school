import React from "react";
import { Navigate, useLocation } from "react-router";
import useRole from "../hooks/useRole";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();
  const location = useLocation();

  if (isRoleLoading || loading) {
    return (
      <div className="w-screen h-screen flex flex-row justify-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  if (user && role=='admin') {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;