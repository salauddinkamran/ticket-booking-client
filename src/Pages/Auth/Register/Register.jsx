import React from "react";
import Container from "../../Shared/Container";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { data, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Register = () => {
  const { registerUser, loading, user, updateUserProfile } = useAuth();
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
    console.log(imageFile);
    try {
      // 1. User Registration
      const result = await registerUser(email, passowrd);
      // 2. Generate image url from selected file
      // 3. Save username & profile photo
      await updateUserProfile(
        name,
        "https://lh3.googleusercontent.com/ogw/AF2bZygdgOBc141KydGzH1nZ55OOQiFxYtXh29Ahnm-yMUlTGdU=s32-c-mo"
      );
      toast.success("Signup successful");
      navigate(location?.state || "/")
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
                  <input
                    type="password"
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
