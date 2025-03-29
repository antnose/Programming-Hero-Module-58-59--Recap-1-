import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/Home/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3001/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
