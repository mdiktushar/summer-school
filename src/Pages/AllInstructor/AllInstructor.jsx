import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Instructor from "./Instructor/Instructor";

const AllInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get(`/users?role=instructor`);
      return res.data;
    }
  );
  //   console.log(instructors);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">All Instructors</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5">
        {instructors.map((instructor) => (
          <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
