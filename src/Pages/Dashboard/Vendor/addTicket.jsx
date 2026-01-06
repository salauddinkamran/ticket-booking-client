import React from "react";
import Container from "../../Shared/Container";
import { useForm } from "react-hook-form";

const addTicket = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <div className="w-6/12 mx-auto">
          <h1 className="text-5xl font-bold text-center mb-5">Add Ticket</h1>
          <form className="border p-5" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="fieldset">
              <div>
                <label className="label text-lg">Upload transport image</label>
                <input
                  type="file"
                  id="image"
                  className="file-input w-full"
                  {...register("image", { require: "Image is requaired" })}
                />
              </div>
              <div>
                <label className="label text-lg">Add Image</label>
                <input
                  type="text"
                  id="title"
                  className="input w-full"
                  placeholder="Enter Your Name Here"
                  {...register("title", {
                    required: "Title is required",
                    maxLength: {
                      value: 20,
                      message: "Title cannot be tooo long",
                    },
                  })}
                />
                {errors.title && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <label className="label text-lg">Transport Type</label>
                <select
                  required
                  className="w-full px-4 py-3 border"
                  {...register("transport", {
                    required: "Transpot is required",
                  })}
                >
                  <option value="Bus">Bus</option>
                  <option value="Train">Train</option>
                  <option value="Flight">Flight</option>
                  <option value="Launch">Launch</option>
                </select>
              </div>

              {/* <label className="label text-lg">Pick a file</label>
              <input
                type="file"
                id="image"
                className="file-input w-full"
                {...register("image")}
              />
              <label className="label text-lg">Email</label>
              <input
                type="email"
                id="email"
                className="input w-full"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )} */}
              <button className="btn btn-neutral mt-4">Add Ticket</button>
            </fieldset>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default addTicket;
