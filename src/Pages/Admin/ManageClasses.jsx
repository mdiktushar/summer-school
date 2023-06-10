import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });

  const handleStatus = (state, id) => {
    fetch(`${import.meta.env.VITE_URL}class-state/${state}/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Class State is Updated`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Feedback is give..!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    // Close the modal
    handelModel()
  };

  const handelModel = () => {
    const modal = window.document.getElementById("my_modal_1");
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Manage Classes</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item) => (
              <React.Fragment key={item._id}>
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.instructorName}</td>
                  <td>{item.email}</td>
                  <td>{item.state}</td>
                  <th>
                    <div className="join">
                      <button
                        disabled={item.state != "pending"}
                        className="btn btn-xs join-item bg-green-200"
                        onClick={() => handleStatus("approved", item._id)}
                      >
                        Approve
                      </button>
                      <button
                        disabled={item.state != "pending"}
                        className="btn btn-xs join-item bg-red-200"
                        onClick={() => handleStatus("denied", item._id)}
                      >
                        Deny
                      </button>
                      <button
                        className="btn btn-xs join-item bg-purple-200"
                        onClick={() => window.my_modal_1.showModal()}
                      >
                        feedback
                      </button>
                    </div>
                  </th>
                </tr>
                <tr>
                  <td colSpan="6">
                    <dialog id="my_modal_1" className="modal">
                      <form
                        onSubmit={(event) => handleFeedback(event, item._id)}
                        method="dialog"
                        className="modal-box"
                      >
                        <h3 className="font-bold text-lg">
                          Hello , Admin {user.displayName}
                        </h3>
                        <p>Give {item.instructorName} your Feedback</p>
                        <textarea
                          name="feedback"
                          placeholder={`Feedback to ${item.instructorName}`}
                          defaultValue={item.feedback}
                          className="textarea textarea-bordered textarea-lg w-full max-w-xs mt-3"
                        ></textarea>

                        <div className="modal-action">
                          <button type="submit" className="btn">
                            Give Feedback
                          </button>
                        </div>
                      </form>
                      <button onClick={handelModel} className="btn">
                        Close
                      </button>
                    </dialog>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;