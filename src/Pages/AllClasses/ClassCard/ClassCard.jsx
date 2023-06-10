import React from "react";

const ClassCard = ({ info, role }) => {
  //   console.log(...role);
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
          <div className="badge badge-secondary">Seats {info.seats}</div>
          <div className="badge badge-outline"> {info.price}$</div>
        </h2>
        <p>By: {info.instructorName}</p>
        <div className="card-actions justify-end">
          <button
            disabled={role === "admin" || role === "instructor"}
            className="btn btn-xs btn-accent"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
