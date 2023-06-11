import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: courses = [], refetch } = useQuery(["course"], async () => {
    const res = await axiosSecure.get(`/enroll?email=${user.email}`);
    return res.data;
  });
  

  return (
    <div>
      <h2 className="text-center font-bold text-4xl m-2">Payment History</h2>

      <div className="overflow-x-auto">
        <table className="table-xs md:table-md lg:table overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th></th>
              <th>Class Name</th>
              <th>Amount</th>
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
                <td>{course.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
