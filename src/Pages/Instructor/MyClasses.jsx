import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/class");
    return res.data;
  });
  console.log(classes);
  return (
    <div>
      <h2 className="text-center font-bold text-4xl">My Classes</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes
              .filter((item) => item.email == user.email)
              .map((item) => (
                <>
                  <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Hello, {item.instructorName}</h3>
                      <p className="py-4">
                        {item.feedback ? (
                          <>{item.feedback}</>
                        ) : (
                          <>No Feedback Yet</>
                        )}
                      </p>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                      </div>
                    </form>
                  </dialog>

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
                    <td>{item.enrolledStudents}</td>
                    <td>{item.state}</td>
                    <td>
                      <button
                        onClick={() => window.my_modal_1.showModal()}
                        className="btn btn-ghost btn-xs"
                      >
                        Feedback
                      </button>
                    </td>
                    <th>
                      <button className="btn btn-ghost btn-xs">Update</button>
                    </th>
                  </tr>
                </>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
