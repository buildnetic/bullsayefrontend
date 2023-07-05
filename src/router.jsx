import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layouts/Guest/GuestLayout";
import MainLayout from "./Layouts/Main/MainLayout";
import SimpleLayout from "./Layouts/Simple/SimpleLayout";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/AuthenticatedUser/Main/Main";
import Error404 from "./pages/Error404/Error404";
import Otp from "./pages/OTP/OTP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <SimpleLayout />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "verify",
        element: <Otp />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/main",
        element: <Main />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
