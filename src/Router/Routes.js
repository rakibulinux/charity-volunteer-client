import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../conponents/ErrorPage/ErrorPage";
import Home from "../conponents/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/volunteer"),
      },
    ],
  },
]);

export default router;
