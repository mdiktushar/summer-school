import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import ClassCard from "./ClassCard/ClassCard";
import useRole from "../../Hooks/useRole";

const AllClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [role, isRoleLoading] = useRole();
  const { user } = useAuth();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class?state=approved");
    return res.data;
  });
  console.log(classes);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl">All Classes</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5">
        {classes.map((item) => (
          <ClassCard info={item} role={role} />
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
