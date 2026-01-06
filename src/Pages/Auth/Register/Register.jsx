import React, { useState } from "react";
import Container from "../../Shared/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { auth } from "../../../firebase/firebase.init";
import { updateProfile } from "firebase/auth";
import { imageUpload } from "../../../utils";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { registerUser } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = async (data) => {
    const { name, image, email, passowrd } = data;
    const imageFile = image[0];

    try {

      const photoURL = await imageUpload(imageFile);

      // 1. User Registration
      // 2. Generate image url from selected file
      // 3. Save username & profile photo

      const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
      };

      const result = await registerUser(email, passowrd);
      await updateUserProfile(name, photoURL);
      await result.user.reload();
      toast.success("Signup successful");
      navigate(location?.state || "/");
      console.log(result);
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <Container>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register Now!</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                  <label className="label text-lg">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input"
                    placeholder="Enter Your Name Here"
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 20,
                        message: "Name cannot be tooo long",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                  <label className="label text-lg">Pick a file</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    className="file-input"
                    {...register("image")}
                  />
                  <label className="label text-lg">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input"
                    placeholder="Enter Your Email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  <label className="label text-lg">Password</label>
                  <div className="relative">
                    <input
                      type={show ? "text" : "password"}
                      name="passowrd"
                      id="passowrd"
                      className="input"
                      placeholder="Password"
                      {...register("passowrd", {
                        required: "Passowrd is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                          message:
                            "Password must contain uppercase, lowercase, number, special character, and be at least 6 characters long.",
                        },
                      })}
                    />
                    <span
                      className="absolute top-3 right-3 cursor-pointer text-lg"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                  </div>

                  {errors.passowrd && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.passowrd.message}
                    </p>
                  )}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
