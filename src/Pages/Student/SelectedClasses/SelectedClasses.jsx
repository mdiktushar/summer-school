import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useRole from "../../../Hooks/useRole";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [role, isRoleLoading] = useRole();
  const { user } = useAuth();
  const { data: carts = [], refetch } = useQuery(["cart"], async () => {
    const res = await axiosSecure.get(`/carts?email=${user.email}`);
    return res.data;
  });
  console.log(carts);

  const handleDelete = (id) => {
    fetch(`${import.meta.env.VITE_URL}carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handlePay = (id, class_ID, email) => {
    fetch(`${import.meta.env.VITE_URL}pay/${id}/${class_ID}/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `Payed`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Selected Classes</h2>

      <div className="overflow-x-auto">
        <table className="table-xs md:table-md lg:table overflow-x-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {carts.map((cart) => (
              <tr key={cart._id}>
                {console.log(cart.classID)}
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={cart.image} />
                      </div>
                    </div>
                  </div>
                </td>
                <td> {cart.name} </td>
                <td> {cart.price}$</td>
                <td>
                  <div className="join join-vertical lg:join-horizontal">
                    <button
                      onClick={() =>
                        handlePay(cart._id, cart.classID, user.email)
                      }
                      className="btn join-item bg-blue-200"
                    >
                      Pay
                    </button>
                    <button
                      onClick={() => handleDelete(cart._id)}
                      className="btn join-item bg-red-200"
                    >
                      Delete
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

export default SelectedClasses;
