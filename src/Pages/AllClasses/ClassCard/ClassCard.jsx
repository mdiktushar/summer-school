import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({ info, role }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handelSelect = () => {
    if (user && user.email) {
      const selectedClass = {
        classID: info._id,
        name: info.name,
        instructorEmail: info.email,
        email: user.email,
        price: info.price,
        image: info.image,
      };
      fetch(`${import.meta.env.VITE_URL}carts`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(selectedClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class is Selected.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div
      className={`card w-96 ${
        info.seats ? "bg-base-100" : "bg-red-200"
      } shadow-xl`}
    >
      <figure>
        <img src={info.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {info.name}
          <div
            className={`badge ${
              info.seats ? "badge-success" : "badge-secondary"
            }`}
          >
            Seats {info.seats}
          </div>
          <div className="badge badge-outline"> {info.price}$</div>
        </h2>
        <p>By: {info.instructorName}</p>
        <div className="card-actions justify-end">
          <button
            disabled={
              role === "admin" || role === "instructor" || info.seats == 0
            }
            className="btn btn-xs btn-accent"
            onClick={handelSelect}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
