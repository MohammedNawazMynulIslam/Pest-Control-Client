import { createBrowserRouter } from "react-router-dom";

import Root from "../../Root/Root";
import Homepage from "../Home/Homepage";
import ErrorPage from "../Error/ErrorPage";
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
        // element: <ServicesPage />,
      },

      {
        path: "/service/:id",
        // element: <SingleServicePage />,
      },
    ],
  },
]);
export default router;
