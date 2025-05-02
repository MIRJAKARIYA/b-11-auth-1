import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../pages/Home/Home";

import Blog from "../pages/Blog/Blog";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";
import CarDetails from "../pages/CarDetails/CarDetails";
import PrivateRoute from "../component/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",

        loader: () => fetch("/data.json"),
        Component: Home,
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <About></About>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element:<PrivateRoute>
          <Blog></Blog>
        </PrivateRoute>
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/cardetails/:id",
        element:<PrivateRoute>
          <CarDetails></CarDetails>
        </PrivateRoute>,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
