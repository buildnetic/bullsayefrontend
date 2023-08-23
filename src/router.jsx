import { createBrowserRouter } from "react-router-dom";
import GuestLayout from "./Layouts/Guest/GuestLayout";
import MainLayout from "./Layouts/Main/MainLayout";
import SimpleLayout from "./Layouts/Simple/SimpleLayout";

import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Otp from "./pages/Otp";
import Error404 from "./pages/Error404/Error404";

import Main from "./pages/AuthenticatedUser/Main/Main";
import CreatePost from "./pages/AuthenticatedUser/Post/CreatePost";
import Profile from "./pages/AuthenticatedUser/Profile/Profile";
import Setting from "./pages/AuthenticatedUser/Setting/Setting";
import Notifications from "./pages/AuthenticatedUser/Notifications/Notifications";
import Edit from "./pages/AuthenticatedUser/Setting/Edit/Edit";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import Test from "./Test";
import PostCard from "./components/AuthenticatedUser/PostCard/PostCard";

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
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/test",
        element: <Test />,
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
      {
        path: "/post/create",
        element: <CreatePost />,
      },
      {
        path: "/post/edit/:id",
        element: <CreatePost />,
      },
      {
        path: "/post/:singlePostId",
        element: <PostCard />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
      {
        path: "/setting/edit",
        element: <Edit />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/user/:id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;
