import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import Root  from "../Layout/Root";


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
]);

export default router;
