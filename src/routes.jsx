import { createBrowserRouter, useParams } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./components/Layouts/Layouts";
import Error404 from "./page/Error-404/Error404";
import Categories from "./page/Categories/Categories";
import CategoryItem from "./page/CategoryItem/CategoryItem";
import Artists from "./page/Artists/Artists";
import ArtistProfile from "./page/ArtistProfile/ArtistProfile";
import Albums from "./page/Albums/Albums";
import AlbumsDetail from "./page/ALbumsDetail/AlbumsDetail";
import PlayList from "./page/PlayList/PlayList";
import PlaylistDetail from "./page/PlaylistDetail/PlaylistDetail";
import PlayMusic from "./page/PlayMusic/PlayMusic";

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
        path: "/category/:categorySlug",
        element: <CategoryItem />,
      },
      {
        path: "/artist",
        element: <Artists />,
      },
      {
        path: "/artist/:artistSlug",
        element: <ArtistProfile />,
      },
      {
        path: "/album",
        element: <Albums />,
      },
      {
        path: "/album/:albumSlug",
        element: <AlbumsDetail />,
      },
      {
        path: "/playlist",
        element: <PlayList />,
      },
      {
        path: "/playlist/:playlistSlug",
        element: <PlaylistDetail />,
      },
      {
        path: "/play-music/:id",
        element: <PlayMusic />,
      },
      {
        path: "/*",
        element: <Error404 />,
      },
    ],
  },
]);

export default router;
