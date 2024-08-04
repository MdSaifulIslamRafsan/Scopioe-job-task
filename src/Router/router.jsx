import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import Root  from "../Layout/Root";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/NewListing",
        element:<PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/Search",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/About",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/Favorites",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/HelpCenter",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
      {
        path: "/Settings",
        element: <PrivateRoute><Home></Home></PrivateRoute>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);

export default router;
