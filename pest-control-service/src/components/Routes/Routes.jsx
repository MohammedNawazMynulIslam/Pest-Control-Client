import { createBrowserRouter } from "react-router-dom";

import Root from "../../Root/Root";
import Homepage from "../Home/Homepage";
import ErrorPage from "../Error/ErrorPage";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Services from "../Pages/Services/Services";
import AllServices from "../Pages/AllServices/AllServices";
import SingleService from "../Pages/SingleService/SingleService";
import AddService from "../Pages/AddService/AddService";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
      },
      {
        path: "/service/:id",
        element: <SingleService />,
      },
      {
        path: "/addService",
        element: <AddService />,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "signIn",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
export default router;
