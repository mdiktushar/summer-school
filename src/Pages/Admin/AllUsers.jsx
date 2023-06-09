import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { async } from "@firebase/util";

const AllUsers = () => {
  let id = 1;
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    try {
      const res = await axiosSecure.get(`users`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  });
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>{id++}</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <div className="join join-vertical lg:join-horizontal">
                  <button
                    disabled={false}
                    className="btn join-item bg-blue-200"
                  >
                    Instructor
                  </button>
                  <button disabled={false} className="btn join-item bg-red-200">
                    Admin
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
