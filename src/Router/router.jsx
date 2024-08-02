import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/Login";
import { Root } from "../Layout/Root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
