import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import CreateCourse from "../course/CreateCourse";
import Home from "../home/Home";
import ViewCourse from "../course/viewCourse/viewCourse";
import PrivateRoute from "../../utils/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/course",
        element: (
          <PrivateRoute>
            <ViewCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/createcourse",
        element: (
          <PrivateRoute>
            <CreateCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewCourse/:id",
        element: <ViewCourse />,
      },
      {
        path: "*",
        element: <h1>404 - Page Not Found</h1>,
      },
    ],
  },
]);

export default router;
