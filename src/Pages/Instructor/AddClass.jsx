import React from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleAddClass = (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, state, instructorName, email } = data;
          const newItem = {
            name,
            instructorName,
            email,
            price: parseFloat(price),
            seats: parseFloat(seats),
            state: 'pending',
            image: imgURL,
            enrolledStudents: parseFloat(0),
            feedback : null,
          };
          console.log(newItem);
          axiosSecure.post("/class", newItem).then((data) => {
            console.log("after posting new class:", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class is added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  if (loading) {
    return (
      <div className="w-screen h-screen flex flex-row justify-center">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-center font-bold text-4xl">Add Classes</h2>

      <form onSubmit={handleSubmit(handleAddClass)} className="my-5 p-2">
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            name="instructorName"
            type="text"
            placeholder="Instructor Name"
            defaultValue={user.displayName}
            className="input input-bordered w-full "
            readOnly
            {...register("instructorName", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Instructor Email"
            defaultValue={user.email}
            className="input input-bordered w-full "
            readOnly
            {...register("email", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Class Name"
            className="input input-bordered w-full "
            required
            {...register("name", { required: true, maxLength: 120 })}
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text font-semibold">Class Image*</span>
          </label>
          <input
            name="image"
            type="file"
            className="file-input file-input-bordered w-full "
            required
            {...register("image", { required: true })}
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Seats*</span>
            </label>
            <input
              name="seats"
              type="number"
              placeholder="Available Seats"
              className="input input-bordered w-full "
              {...register("state", { required: true })}
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              name="price"
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full "
              required
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <button className="btn btn-sm mt-4" type="submit">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClass;
