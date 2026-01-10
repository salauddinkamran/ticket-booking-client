import { createBrowserRouter } from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Register from "../Pages/Auth/Register/Register";
import Login from "../Pages/Auth/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Error from "../Components/Error/Error";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivetRoute from "./PrivetRoute";
import AddTicket from "../Pages/Dashboard/Vendor/AddTicket";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        element: (
          <PrivetRoute>
            <h3 className="text-5xl font-medium p-5">This Is Deshboard</h3>
          </PrivetRoute>
        ),
      },
      {
        path: "addTicket",
        element: (
          <PrivetRoute>
            <AddTicket></AddTicket>
          </PrivetRoute>
        ),
        // Component: addTicket,
      },
    ],
  },
]);
