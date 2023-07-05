import { ChartBarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

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
            Sign In to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-c-green hover:text-c-green-dark"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-c-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-c-green-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-c-green"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have account?{" "}
            <NavLink
              to="/signup"
              className="font-semibold leading-6 text-c-green hover:text-c-green-dark"
            >
              Signup here
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
