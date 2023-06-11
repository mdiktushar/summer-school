import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const GiveFeedback = () => {
  const { id, user, instructor, feedback } = useParams();
//   const navigate = useNavigate();

  const handleFeedback = (event, id) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const feedback = formData.get("feedback");

    // console.log(feedback,id);

    fetch(`${import.meta.env.VITE_URL}class-feedback/${feedback}/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Feedback is give..!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="text-center">
      <h2 className="text-center font-bold text-4xl">Give Feedback</h2>
      <h3 className="text-lg my-5">
        Hello, Admin {user} give your feedback to {instructor}
      </h3>
      <form onSubmit={(event) => handleFeedback(event, id)}>
        <textarea
          placeholder="Give Your Feedback"
          defaultValue={feedback}
          name="feedback"
          className="textarea textarea-bordered textarea-md w-full max-w-xs"
        ></textarea>
        <br />
        <button className="btn btn-xs" type="submit">Give Feedback</button>
      </form>
    </div>
  );
};

export default GiveFeedback;
