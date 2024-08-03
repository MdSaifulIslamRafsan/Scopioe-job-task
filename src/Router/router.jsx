import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import Root  from "../Layout/Root";
import SignUp from "../pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
    //   {
    //     path: "/login",
    //     element: <Login></Login>,
    //   },
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
