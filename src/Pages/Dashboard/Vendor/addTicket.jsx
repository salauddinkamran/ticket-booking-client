import React from "react";
import Container from "../../Shared/Container";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils";
import useAuth from "../../../hooks/useAuth";

const AddTicket = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { image, title, transport, price, quantity, perks } = data;
    const imageFile = image[0];
    const imageURL = await imageUpload(imageFile);
    const ticketData = {
      image: imageURL,
      title,
      transport,
      price: Number(price),
      quantity: Number(quantity),
      perks,
      seller: {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
    };
    console.table(ticketData);
  };
  const items = ["Free cancellation", "AC Seat", "Meal included"];
  return (
    <Container>
      <div className="h-screen flex justify-center items-center">
        <div className="md:w-6/12 mx-auto">
          <h1 className="text-5xl font-bold text-center mb-5">Add Ticket</h1>
          <form
            className="border border-gray-400 p-5 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <fieldset className="fieldset">
              <div className="mb-2">
                <label className="label text-lg mb-2">
                  Upload transport image
                </label>
                <input
                  type="file"
                  id="image"
                  className="file-input w-full text-base"
                  {...register("image", { required: "Image is requaired" })}
                />
                {errors.image && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.image.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
                <label className="label text-lg mb-2">Location title</label>
                <input
                  type="text"
                  id="title"
                  className="input w-full text-base"
                  placeholder="Enter Your Location Name Here"
                  {...register("title", {
                    required: "Location title is required",
                    maxLength: {
                      value: 20,
                      message: "Title cannot be tooo long",
                    },
                  })}
                />
                {errors.title && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.title.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
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
                  <p className="text-red-400 text-xs mt-2">
                    {errors.transport.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
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
                  <p className="text-red-400 text-xs mt-2">
                    {errors.price.message}
                  </p>
                )}
              </div>
              <div className="mb-2">
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
                  <p className="text-red-400 text-xs mt-2">
                    {errors.quantity.message}
                  </p>
                )}
              </div>
              <div className="mt-2">
                {/* <label className="label text-lg mb-2">Perks</label>
                <select
                  className="w-full px-4 py-3 border border-gray-400 rounded-md text-base"
                  required
                  {...register("perks", { required: "Perks is requaired" })}
                >
                  <option value="">Select your perks</option>
                  <option value="Free_cancellation">Free cancellation</option>
                  <option value="AC_Seat">AC Seat</option>
                  <option value="Meal_included">Meal included</option>
                </select> */}
                {items.map((item, index) => (
                  <label key={index} className="label text-base mr-3">
                    <input
                      type="checkbox"
                      className="checkbox"
                      {...register("perks", {
                        required: "Select at least one perk",
                      })}
                    />
                    <span>{item}</span>
                  </label>
                ))}

                {errors.perks && (
                  <p className="text-red-400 text-xs mt-2">
                    {errors.perks.message}
                  </p>
                )}
              </div>
              <button className="btn btn-neutral mt-4">Add Ticket</button>
            </fieldset>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AddTicket;
