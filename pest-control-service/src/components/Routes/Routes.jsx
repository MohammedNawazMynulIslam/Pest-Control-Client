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
import ManageService from "../Pages/ManageService/ManageService";
import EditService from "../Pages/EditService.jsx/EditService";
import MySchedules from "../Pages/MySchedules/MySchedules";
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
        path: "/manageService",
        element: <ManageService></ManageService>,
      },
      {
        path: "/editService/:id",
        element: <EditService></EditService>,
      },
      {
        path: "/mySchedules",
        element: <MySchedules></MySchedules>,
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
