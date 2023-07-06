import { useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const HomeHeader = () => {
  let Links = [
    { name: "How It Works", link: "#howItWorks" },
    { name: "Performers", link: "#topPerformers" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Help", link: "#help" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-white z-50">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <NavLink
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="font-bold text-2xl cursor-pointer flex items-center gap-1"
        >
          <ChartBarIcon className="w-7 h-7 text-c-green" />
          <span>VIPANA</span>
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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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

          <NavLink
            to="/signup"
            className="md:ml-8 rounded-md border-c-green border-2 p-2 px-3 text-black hover:text-white hover:bg-c-green duration-75 text-sm font-medium"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/signin"
            className="rounded-md border-c-green border-2 bg-c-green p-2 px-3 shadow-md hover:shadow-none ml-4 text-white duration-75 text-sm font-medium"
          >
            Sign In
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default HomeHeader;
