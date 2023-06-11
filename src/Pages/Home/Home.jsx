import React from "react";
import Slider from "./components/slider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ClassCard from "../AllClasses/ClassCard/ClassCard";
import useRole from "../../Hooks/useRole";
import Instructor from "../AllInstructor/Instructor/Instructor";
import Album from "./components/Album";

const Home = () => {
  const [axiosSecure] = useAxiosSecure();
  const [role, isRoleLoading] = useRole();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class?state=approved");
    return res.data;
  });

  const { data: instructors = [] } = useQuery(
    ["instructors"],
    async () => {
      const res = await axiosSecure.get(`/users?role=instructor&sort=1`);
      return res.data;
    }
  );
  return (
    <div>
    <h1 className="text-center font-bold text-7xl m-10">Welcome Everyone</h1>
      <Slider />

      <h2 className="text-center font-bold text-4xl m-10">Popular Classes</h2>
      <hr className="" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5 content-evenly">
        {classes.slice(0, 6).map((item) => (
          <ClassCard key={item._id} info={item} role={role} />
        ))}
      </div>

      <h2 className="text-center font-bold text-4xl m-10">Popular Authors</h2>
      <hr className="" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5">
        {instructors.slice(0, 6).map((instructor) => (
           <Instructor key={instructor._id} instructor={instructor} />
        ))}
      </div>


      <Album />
    </div>
  );
};

export default Home;
