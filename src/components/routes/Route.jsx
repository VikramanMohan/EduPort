import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../../App";
import Login from "../auth/login/Login";
import Register from "../auth/register/Register";
import Course from "../course/Course";
import CreateCourse from "../course/CreateCourse";
import Home from "../home/Home";
import ViewCourse from "../course/viewCourse/viewCourse";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true, 
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/course',
                element: <Course />
            },
            {
                path: '/createcourse',
                element: <CreateCourse />
            },
            {
                path: '/viewCourse/:id',
                element: <ViewCourse />
            }
        ]
    }
]);

export default router;
