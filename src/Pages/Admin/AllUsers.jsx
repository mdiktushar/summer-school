import React, { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleRole = (user, role) => {
    fetch(`${import.meta.env.VITE_URL}users/${role}/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is ${role == "admin" && "an Admin"} ${
              role == "instructor" && "a Instructor"
            } Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
                        onClick={() => handleRole(person, "instructor")}
                      >
                        Instructor
                      </button>
                      <button
                        disabled={person.role == "admin"}
                        className="btn join-item bg-red-200"
                        onClick={() => handleRole(person, "admin")}
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
