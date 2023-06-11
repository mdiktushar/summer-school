import React from "react";

const Instructor = ({ instructor }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{instructor.name}</h2>
        <p>{instructor.email}</p>
        <p>Total {instructor.enrolledStudents} students</p>
      </div>
      <figure>
        <img
          className="object-cover h-48 w-96"
          src={instructor.image}
          alt={instructor.name}
        />
      </figure>
    </div>
  );
};

export default Instructor;
