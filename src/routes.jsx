import { createBrowserRouter, useParams } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./components/Layouts/Layouts";
import Error404 from "./page/Error-404/Error404";
import Categories from "./page/Categories/Categories";

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
        path: "/category",
        element: <Categories />,
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
