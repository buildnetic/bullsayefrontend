import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import {
  AiFillHome,
  AiFillPlusSquare,
  AiOutlineLoading3Quarters,
  AiOutlineSearch,
  AiOutlineUser,
  AiTwotoneSetting,
} from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import axiosInstance from "../../axiosInstance";
import { ToastError, ToastSuccess } from "../../ToastNotification";
import ProfileImg from "../../assets/images/profile-icon.png";
import { useQuery } from "react-query";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainHeader = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const Dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResultBox, setShowSearchResultBox] = useState(false);

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

  const getUserDetailsFn = async () => {
    return await axiosInstance.get(`/users/${loggedUser.id}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getUserDetailsQuery = useQuery(
    "getUserDetailsHeader",
    getUserDetailsFn
  );

  const getSerachResultsFn = async () => {
    return await axiosInstance.get(`/search?name=${searchQuery}`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getSerachResultsQuery = useQuery(
    "getSerachResults",
    getSerachResultsFn,
    {
      enabled: showSearchResultBox,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );

  const onChangeHandler = (e) => {
    setSearchQuery(e.target.value);
    setShowSearchResultBox(true);
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white shadow-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <NavLink
                        to="/main"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-c-green text-white rounded-md px-3 py-2 font-medium transition-all"
                            : "text-gray-300 hover:bg-c-green hover:text-white rounded-md px-3 py-2 font-medium transition-all"
                        }
                        title="Home"
                      >
                        <AiFillHome className="text-xl" />
                      </NavLink>
                      <NavLink
                        to="/post/create"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-c-green text-white rounded-md px-3 py-2 font-medium transition-all"
                            : "text-gray-400 hover:bg-c-green hover:text-white rounded-md px-3 py-2 font-medium transition-all"
                        }
                        title="Create Post"
                      >
                        <AiFillPlusSquare className="text-2xl" />
                      </NavLink>
                      <NavLink
                        to={`/profile/${loggedUser.id}`}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-c-green text-white rounded-md px-3 py-2 font-medium transition-all"
                            : "text-gray-400 hover:bg-c-green hover:text-white rounded-md px-3 py-2 font-medium transition-all"
                        }
                        title="Profile"
                      >
                        <AiOutlineUser className="text-2xl" />
                      </NavLink>
                      <NavLink
                        to="/setting"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-c-green text-white rounded-md px-3 py-2 font-medium transition-all"
                            : "text-gray-400 hover:bg-c-green hover:text-white rounded-md px-3 py-2 font-medium transition-all"
                        }
                        title="Setting"
                      >
                        <AiTwotoneSetting className="text-2xl" />
                      </NavLink>
                      <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                          isActive
                            ? "bg-c-green text-white rounded-md px-3 py-2 font-medium transition-all"
                            : "text-gray-400 hover:bg-c-green hover:text-white rounded-md px-3 py-2 font-medium transition-all"
                        }
                        title="Notifications"
                      >
                        <MdNotifications className="text-2xl" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="search by user name"
                        className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
                        onChange={onChangeHandler}
                      />
                      <AiOutlineSearch className="absolute right-2 top-2 text-xl text-gray-400" />
                    </div>
                    {showSearchResultBox && (
                      <div className=" absolute top-10 left-0 right-0 w-full bg-white shadow-sm rounded-md">
                        {getSerachResultsQuery.isLoading ? (
                          <p className="text-sm text-gray-400 px-2 py-1">
                            Loading...
                          </p>
                        ) : getSerachResultsQuery.isError ? (
                          <p className="text-sm text-gray-400 px-2 py-1">
                            {
                              getSerachResultsQuery?.error?.response?.data
                                ?.message
                            }
                          </p>
                        ) : (
                          getSerachResultsQuery?.data?.data?.data?.map(
                            (elem, id) => (
                              <NavLink
                                key={id}
                                to={`/profile/${elem.id}`}
                                className="flex gap-4 items-center py-1 px-2 text-sm hover:bg-gray-100 rounded-md"
                              >
                                <img
                                  className={`h-8 w-8 rounded-full object-cover border ${
                                    !elem?.user_profile_image && "p-1.5"
                                  }`}
                                  alt="Profile Image"
                                  src={
                                    !elem?.user_profile_image
                                      ? ProfileImg
                                      : elem?.user_profile_image
                                  }
                                />
                                {elem.name}
                              </NavLink>
                            )
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
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
                            Home Page
                          </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              onClick={logoutHandler}
                              className={classNames(
                                active ? "bg-gray-100 cursor-pointer" : "",
                                "px-4 py-2 text-sm text-gray-700 flex items-center gap-3"
                              )}
                            >
                              Sign out
                              {isLoading && (
                                <AiOutlineLoading3Quarters className="animate-spin" />
                              )}
                            </div>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* mobile menu start */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink
                  to="/main"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-c-green text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-3"
                      : "text-gray-300 hover:bg-c-green hover:text-white flex flex-row gap-3 rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  <AiFillHome className="text-xl" /> Home
                </NavLink>
                <NavLink
                  to="/post/create"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-c-green text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-3"
                      : "text-gray-300 hover:bg-c-green hover:text-white flex flex-row gap-3 rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  <AiFillPlusSquare className="text-2xl" /> Create Post
                </NavLink>
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-c-green text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-3"
                      : "text-gray-300 hover:bg-c-green hover:text-white flex flex-row gap-3 rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  <AiOutlineUser className="text-2xl" /> Profile
                </NavLink>
                <NavLink
                  to="/setting"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-c-green text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-3"
                      : "text-gray-300 hover:bg-c-green hover:text-white flex flex-row gap-3 rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  <AiTwotoneSetting className="text-2xl" /> Setting
                </NavLink>
                <NavLink
                  to="/notifications"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-c-green text-white rounded-md px-3 py-2 text-base font-medium flex flex-row gap-3"
                      : "text-gray-300 hover:bg-c-green hover:text-white flex flex-row gap-3 rounded-md px-3 py-2 text-base font-medium"
                  }
                >
                  <MdNotifications className="text-2xl" /> Notifications
                </NavLink>
              </div>
            </Disclosure.Panel>
            {/* mobile menu end */}
          </>
        )}
      </Disclosure>
    </>
  );
};

export default MainHeader;
