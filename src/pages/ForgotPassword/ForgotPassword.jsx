import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import { ToastError, ToastSuccess } from "../../ToastNotification";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const [resetPasswordData, setResetPasswordData] = useState({
    email: null,
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
        "/forgot-password",
        resetPasswordData
      );
      if (res?.data?.success) {
        ToastSuccess(res?.data?.message);
        navigate("/signin");
      } else {
        ToastError(res?.data?.message);
      }
      setIsLoading(false);
    } catch (error) {
      setError(error?.response?.data?.message);
      ToastError(error?.response?.data?.message);
      setIsLoading(false);
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
            Send Reset Password Link
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
                  className={isError ? inputErrorStyle : inputNormalStyle}
                />
              </div>
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
                Get Link
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

export default ForgotPassword;
