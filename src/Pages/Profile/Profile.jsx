import React from "react";
import Container from "../Shared/Container";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { auth } from "../../firebase/firebase.init";
import { useLocation, useNavigate } from "react-router";

const Profile = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    signOutUser(auth)
      .then(() => {
        navigate(location?.state || "/");
        toast.success("Signout successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <Container>
      <div className="flex flex-col justify-center items-center py-20">
        <div className="w-40 rounded-full border-2 border-[#95afc0]">
          <img src={user.photoURL} className="rounded-full" alt="" />
        </div>
        <h3 className="text-xl font-medium">Name: {user.displayName}</h3>
        <button onClick={handleLogout} className="btn btn-primary mt-3">
          Logout
        </button>
      </div>
    </Container>
  );
};

export default Profile;
