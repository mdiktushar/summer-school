import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRole from "../../../Hooks/useRole";
import useAuth from "../../../Hooks/useAuth";

const EnrolledClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: courses = [], refetch } = useQuery(["cart"], async () => {
    const res = await axiosSecure.get(`/enroll?email=${user.email}`);
    return res.data;
  });
  //   console.log(courses);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Enrolled Classes</h2>

      <div className="overflow-x-auto">
        <table className="table-xs md:table-md lg:table overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th></th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {courses.map((course, index) => (
              <tr key={course._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td> {course.name} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
