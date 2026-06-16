import { createBrowserRouter, useParams } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./components/Layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ],
  },
]);

export default router;
