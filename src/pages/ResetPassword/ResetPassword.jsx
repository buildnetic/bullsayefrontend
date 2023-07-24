import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosInstance";
import { ToastError, ToastSuccess } from "../../ToastNotification";

const ResetPassword = () => {
  const token = window.location.search.replace("?token=", "");

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState({
    token: token || null,
    password: null,
    password_confirmation: null,
  });

  const onChangeHandler = (e) => {
    setResetPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axiosInstance.post(
        "/reset-password",
        resetPasswordData
      );
      ToastSuccess(res?.data?.message);
      setIsLoading(false);
      navigate("/signin");
    } catch (error) {
      setError(error?.response?.data?.message);
      ToastError(error?.response?.data?.message);
      setIsLoading(false);
      navigate("/signin");
    }
  };

  const inputNormalStyle =
    "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6";
  const inputErrorStyle =
    "block w-full rounded-md border-2 border-red-600 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6";

  return (
    <>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
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
            Reset your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={resetPasswordHandler}
            className="space-y-6"
            action="#"
            method="POST"
          >
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  New Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={onChangeHandler}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className={isError ? inputErrorStyle : inputNormalStyle}
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
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm New Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  onChange={onChangeHandler}
                  id="confirmPassword"
                  name="password_confirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className={isError ? inputErrorStyle : inputNormalStyle}
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
                Reset Password
                {isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
