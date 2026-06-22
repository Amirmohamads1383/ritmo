import { createBrowserRouter, useParams } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./components/Layouts/Layouts";
import Error404 from "./page/Error-404/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/*",
        element: <Error404 />
      }
    ],
  },
]);

export default router;
