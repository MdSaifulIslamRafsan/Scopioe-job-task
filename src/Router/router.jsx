import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import Root  from "../Layout/Root";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/NewListing",
        element: <Home></Home>,
      },
      {
        path: "/Search",
        element: <Home></Home>,
      },
      {
        path: "/About",
        element: <Home></Home>,
      },
      {
        path: "/Favorites",
        element: <Home></Home>,
      },
      {
        path: "/HelpCenter",
        element: <Home></Home>,
      },
      {
        path: "/Settings",
        element: <Home></Home>,
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
