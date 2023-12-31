import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { NavLink, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";
import { login } from "../../redux/userSlice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastError, ToastSuccess } from "../../ToastNotification";

const SignUp = () => {
  const Dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.user);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (loggedUser) {
    return <Navigate to="/" />;
  }

  const onChangeHandler = (e) => {
    setSignUpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axiosInstance.post("/register", signUpData);
      Dispatch(login(res?.data?.user));
      ToastSuccess(res?.data?.message);
      setIsLoading(false);
      console.log(res);
    } catch (error) {
      setError(error?.response?.data?.errors);
      ToastError("Error has been occured...");
      setIsLoading(false);
      console.log("Error", error?.response?.data?.errors);
    }
  };

  const inputNormalStyle =
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6";
  const inputErrorStyle =
    "block w-full rounded-md border-2 border-red-600 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6";

  return (
    <>
      <div className="flex flex-1 flex-col h-screen justify-center px-6 py-8 md:py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <NavLink
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="font-bold text-4xl cursor-pointer flex items-center gap-1 justify-center"
          >
            <ChartBarIcon className="w-7 h-7 text-c-green" />
            <span>VIPANA</span>
          </NavLink>
          <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-c-green">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={signUpHandler}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={onChangeHandler}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className={isError?.name ? inputErrorStyle : inputNormalStyle}
                />
              </div>
              {isError?.name && (
                <span className="text-sm text-red-600">{isError?.name}</span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={onChangeHandler}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={
                    isError?.email ? inputErrorStyle : inputNormalStyle
                  }
                />
              </div>
              {isError?.email && (
                <span className="text-sm text-red-600">{isError?.email}</span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={
                    isError?.password ? inputErrorStyle : inputNormalStyle
                  }
                />
                {showPassword ? (
                  <PiEyeBold
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-xl text-c-green cursor-pointer"
                  />
                ) : (
                  <PiEyeClosedBold
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-xl text-c-green cursor-pointer"
                  />
                )}
              </div>
              {isError?.password && (
                <span className="text-sm text-red-600">
                  {isError?.password}
                </span>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={onChangeHandler}
                  id="confirmPassword"
                  name="password_confirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className={
                    isError?.password ? inputErrorStyle : inputNormalStyle
                  }
                />
                {showConfirmPassword ? (
                  <PiEyeBold
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2 text-xl text-c-green cursor-pointer"
                  />
                ) : (
                  <PiEyeClosedBold
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-2 text-xl text-c-green cursor-pointer"
                  />
                )}
              </div>
              {isError?.password && (
                <span className="text-sm text-red-600">
                  {isError?.password}
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className={
                  isLoading
                    ? "cursor-not-allowed flex w-full justify-center items-center gap-3 rounded-md bg-c-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-green"
                    : "flex w-full justify-center items-center gap-3 rounded-md bg-c-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-green"
                }
              >
                Sign Up
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have account?{" "}
            <NavLink
              to="/signin"
              className="font-semibold leading-6 text-c-green hover:text-c-green-dark"
            >
              Signin here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
