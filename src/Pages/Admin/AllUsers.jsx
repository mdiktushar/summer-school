import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  console.log(users);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl">All Users</h2>

      <div className="overflow-x-auto">
        <table className="table-xs md:table-md lg:table overflow-x-auto">
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
            {users
              .filter((person) => person.email != user.email)
              .map((person, index) => (
                <tr key={person._id}>
                  <th>{index + 1}</th>
                  <td> {person.name} </td>
                  <td> {person.email} </td>
                  <td> {person.role} </td>
                  <td>
                    <div className="join join-vertical lg:join-horizontal">
                      <button
                        disabled={person.role == "instructor"}
                        className="btn join-item bg-blue-200"
                      >
                        Instructor
                      </button>
                      <button
                        disabled={person.role == "admin"}
                        className="btn join-item bg-red-200"
                      >
                        Admin
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
