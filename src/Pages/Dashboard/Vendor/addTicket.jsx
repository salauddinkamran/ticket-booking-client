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
          <form
            className="border border-gray-400 p-5 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="fieldset">
              <div>
                <label className="label text-lg mb-2">
                  Upload transport image
                </label>
                <input
                  type="file"
                  id="image"
                  className="file-input w-full text-base"
                  {...register("image", { require: "Image is requaired" })}
                />
                {errors.image && (
                  <p className="text-red-400 text-xs">{errors.image.message}</p>
                )}
              </div>
              <div>
                <label className="label text-lg mb-2">Location title</label>
                <input
                  type="text"
                  id="title"
                  className="input w-full text-base"
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
                <label className="label text-lg mb-2">Transport Type</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-base"
                  {...register("transport", {
                    required: "Transpot is required",
                  })}
                >
                  <option value="">Select your transport</option>
                  <option value="Bus">Bus</option>
                  <option value="Train">Train</option>
                  <option value="Flight">Flight</option>
                  <option value="Launch">Launch</option>
                </select>
                {errors.transport && (
                  <p className="text-red-400 text-xs">
                    {errors.transport.message}
                  </p>
                )}
              </div>
              <div>
                <label className="label text-lg mb-2">Ticket Price</label>
                <input
                  type="number"
                  placeholder="Price per unit"
                  id="price"
                  className="w-full px-4 py-3 rounded-md border border-gray-400 text-base"
                  {...register("price", {
                    required: "Price is requaired",
                    min: { value: 0, message: "Price must be posetive" },
                  })}
                />
                {errors.price && (
                  <p className="text-red-400 text-xs">{errors.price.message}</p>
                )}
              </div>
              <div>
                <label className="label text-lg mb-2">Ticket quantity</label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-base"
                  placeholder="Available ticket quantity"
                  {...register("quantity", {
                    required: "Quantity is requaired",
                    min: { value: 1, message: "Quantity must be at least 1" },
                  })}
                />
                {errors.quantity && (
                  <p className="text-red-400 text-xs">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
              <div>
                <label className="label text-lg mb-2">Perks</label>
                <select
                  className="w-full px-4 py-3 border border-gray-400 rounded-md"
                  required
                  {...register("perks", { required: "Perks is requaired" })}
                >
                  <option value="">Select your perks</option>
                  <option value="Free_cancellation">Free cancellation</option>
                  <option value="AC_Seat">AC Seat</option>
                  <option value="Meal_included">Meal included</option>
                </select>
                {errors.perks && (
                  <p className="text-red-400 text-xs">{errors.perks.message}</p>
                )}
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
