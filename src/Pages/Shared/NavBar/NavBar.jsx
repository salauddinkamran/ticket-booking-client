import React from "react";
import { Link, NavLink } from "react-router";
import Container from "../Container";
import useAuth from "../../../hooks/useAuth";
import { auth } from "../../../firebase/firebase.init";
import toast from "react-hot-toast";
import logo from "../../../assets/logo-2.png"

const NavBar = () => {
  const { user, signOutUser } = useAuth();
  const handleLogout = () => {
    signOutUser(auth)
      .then(() => {
        toast.success("Signout successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-ticket">All Ticket</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/deshboard">Deshboard</NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="cursor-pointer text-xl font-bold">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold flex gap-5">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          {user ? (
            <div className="dropdown dropdown-end z-30">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow space-y-3"
              >
                <li>
                  <NavLink to="/profile" className="text-base btn btn-primary">
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleLogout}
                    className="text-base btn btn-primary"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-5">
              {" "}
              <NavLink className="font-bold" to="login">
                Login
              </NavLink>
              <NavLink className="font-bold" to="register">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
