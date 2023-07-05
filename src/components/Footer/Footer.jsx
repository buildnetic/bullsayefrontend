import { ChartBarIcon } from "@heroicons/react/24/solid";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      name: "How It Works",
      href: "#howItWorks",
    },
    {
      name: "Top Performers",
      href: "#topPerformers",
    },
    {
      name: "Testimonials",
      href: "#testimonials",
    },
    {
      name: "Help",
      href: "#help",
    },
    {
      name: "Sign In",
      href: "/signin",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
  ];

  return (
    <>
      <div className="bg-[#09281D] text-white">
        <div className="mx-auto max-w-7xl px-2 pt-16 pb-10 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-5">
              <a
                href="/"
                className="font-bold text-2xl cursor-pointer flex items-center gap-1"
              >
                <ChartBarIcon className="w-7 h-7" />
                <span>VIPANA</span>
              </a>
              <p className="mt-3 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                totam omnis delectus voluptatum ipsa dolor fugit ut consectetur
                quod nihil! totam omnis delectus voluptatum ipsa dolor fugit ut
                consectetur quod nihil!
              </p>
            </div>
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {quickLinks.map((elem) => (
                  <NavLink
                    to={elem.href}
                    className="mt-1 hover:text-gray-200 transition-all block text-sm"
                    key={elem.name}
                  >
                    {elem.name}
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-2xl font-bold mb-2">Social Media</h2>
              <div className="flex flex-row gap-4">
                <a
                  href="#"
                  target="_blank"
                  className="mt-1 hover:text-gray-200 transition-all"
                >
                  <FaLinkedinIn className="text-2xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="mt-1 hover:text-gray-200 transition-all"
                >
                  <FaTwitter className="text-2xl" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="mt-1 hover:text-gray-200 transition-all"
                >
                  <FaFacebookF className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center border-t-[1px] border-[#19392e] py-3 text-xs text-gray-300">
          Copyright &copy; {currentYear} | All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
