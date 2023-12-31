import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: role, isLoading: isRoleLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user?.email) {
        throw new Error("User email not available.");
      }
      const res = await axiosSecure.get(`/users/role/${user?.email}`);
      console.log("Role response", res);
      if (!res.data?.role) {
        throw new Error("Role data not available.");
      }
      return res.data?.role;
    },
  });
  console.log(role, isRoleLoading);
  return [role, isRoleLoading];
};

export default useRole;
