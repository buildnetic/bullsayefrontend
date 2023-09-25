import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { logout } from "../../redux/userSlice";
import axiosInstance from "../../axiosInstance";
import { ToastError, ToastSuccess } from "../../ToastNotification";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProfileImg from "../../assets/images/profile-icon.png";
import { useQuery } from "react-query";
import PrimaryButton from "../Buttons/PrimaryButton";

const HomeHeader = () => {
  const Dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(false);
  let [open, setOpen] = useState(false);
  let [isNavSticky, setIsNavSticky] = useState(false);

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      const res = await axiosInstance.get("/logout", {
        headers: {
          Authorization: `Bearer ${loggedUser.token}`,
        },
      });
      ToastSuccess(res?.data?.message);
      Dispatch(logout());
      setIsLoading(false);
    } catch (error) {
      ToastError(error?.response?.data?.message);
      setIsLoading(false);
      console.log(error);
    }
  };

  let Links = [
    { name: "How It Works", link: "#howItWorks" },
    { name: "Performers", link: "#topPerformers" },
  ];

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${loggedUser?.id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser?.token}`,
      },
    });
  };

  const getUserDetailsQuery = useQuery(
    "getUserDetailsHomeHeader",
    getUserDetailsFn,
    {
      enabled: loggedUser !== null,
    }
  );

  useEffect(() => {
    const scrollHandler = () =>
      window.pageYOffset > 50 ? setIsNavSticky(true) : setIsNavSticky(false);

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 ${
        isNavSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex items-center justify-between py-4 md:px-10 px-7 ${
          isNavSticky ? "bg-white" : "bg-transparent"
        }`}
      >
        {/* logo section */}
        <NavLink
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="font-bold text-2xl cursor-pointer flex items-center gap-1"
        >
          <img
            src="../../images/bullsaye-with-text.svg"
            alt="BullSaye"
            className=" w-48"
          />
        </NavLink>
        {/* Menu button */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* menu links and signin and signup */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <a
                href={link.link}
                className="text-gray-800 hover:text-c-green duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}

          {loggedUser ? (
            <Menu as="div" className="relative ml-5">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className={`h-8 w-8 rounded-full object-cover ${
                      !getUserDetailsQuery?.data?.data?.data?.user
                        .user_profile_image && "p-1.5"
                    }`}
                    src={
                      !getUserDetailsQuery?.data?.data?.data?.user
                        .user_profile_image
                        ? ProfileImg
                        : getUserDetailsQuery?.data?.data?.data?.user
                            .user_profile_image
                    }
                    alt="Profile Image"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <NavLink
                      to="/"
                      className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Main Page
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <div
                      onClick={logoutHandler}
                      className="cursor-pointer flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                      {isLoading && (
                        <AiOutlineLoading3Quarters className="animate-spin" />
                      )}
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <>
              <PrimaryButton
                to="/signup"
                classes="md:ml-8 text-black bg-white p-2 px-3 text-sm font-medium border-c-green border-2 hover:text-white hover:border-green-500"
                rounded="md"
                title="Sign Up"
              />
              <PrimaryButton
                to="/signin"
                classes="text-white bg-c-green p-2 px-3 text-sm font-medium ml-4 border-c-green border-2 hover:border-green-500"
                rounded="md"
                title="Sign In"
              />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
