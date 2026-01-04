import React from "react";
import { useForm } from "react-hook-form";
import Container from "../../Shared/Container";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const hendleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Login successfully!");
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error?.message);
        console.log(error);
      });
  };
  return (
    <Container>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h2 className="text-3xl md:text-5xl font-bold">Login Now!</h2>
              <form onSubmit={handleSubmit(hendleLogin)}>
                <fieldset className="fieldset">
                  <label className="label text-lg">Email</label>
                  <input
                    type="email"
                    className="input"
                    // name="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                  />
                  {
                    errors.email?.type === "required" && <p className="text-red-500 text-xs">Thsi email field is required</p>
                  }
                  <label className="label text-lg">Password</label>
                  <input
                    type="password"
                    className="input"
                    // name="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message:
                          "Password must contain uppercase, lowercase, number, special character, and be at least 6 characters long.",
                      },
                    })}
                  />
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
