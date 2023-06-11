import React from "react";
import Slider from "./components/slider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ClassCard from "../AllClasses/ClassCard/ClassCard";
import useRole from "../../Hooks/useRole";

const Home = () => {
  const [axiosSecure] = useAxiosSecure();
  const [role, isRoleLoading] = useRole();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class?state=approved");
    return res.data;
  });
  return (
    <div>
      <Slider />

      <h2 className="text-center font-bold text-4xl m-10">Popular Classes</h2>
      <hr className="" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:mx-20 my-5">
        {classes.slice(0, 6).map((item) => (
          <ClassCard key={item._id} info={item} role={role} />
        ))}
      </div>

      <h2 className="text-center font-bold text-4xl m-10">Popular Authors</h2>
      <hr className="" />
    </div>
  );
};

export default Home;
