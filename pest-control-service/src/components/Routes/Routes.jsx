import { createBrowserRouter } from "react-router-dom";

import Root from "../../Root/Root";
import Homepage from "../Home/Homepage";
import ErrorPage from "../Error/ErrorPage";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Services from "../Pages/Services/Services";
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
        // loader: () => fetch("http://localhost:3000/services"),
      },

      {
        path: "/service/:id",
        // element: <SingleServicePage />,
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
