import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
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
      name: "Sign In",
      href: "/signin",
    },
    {
      name: "Sign Up",
      href: "/signup",
    },
  ];

  const supportLinks = [
    {
      name: "Term & Condition",
      href: "/",
    },
    {
      name: "Privacy Policy",
      href: "/",
    },
    {
      name: "Support Center",
      href: "/",
    },
  ];

  const socialMediaLinks = [
    {
      icon: BiLogoFacebook,
      href: "/facebook",
    },
    {
      icon: BiLogoLinkedin,
      href: "/linkedin",
    },
    {
      icon: BiLogoInstagram,
      href: "/instagram",
    },
    {
      icon: BiLogoYoutube,
      href: "/youtube",
    },
    {
      icon: BiLogoTwitter,
      href: "/twitter",
    },
  ];

  return (
    <>
      <div className="bg-[url('../../../images/bear-bull.jpg')] bg-cover bg-center text-white">
        <div
          style={{
            backgroundColor: "rgba(9, 40, 29, 0.8)",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="mx-auto max-w-7xl px-2 pt-16 pb-10 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-6">
                <a
                  href="/"
                  className="font-bold text-2xl cursor-pointer flex items-center gap-1"
                >
                  <img
                    src="../../images/bullsaye-with-text.svg"
                    alt="BullSaye"
                    className=" w-48"
                  />
                </a>
                <p className="mt-3 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio fugit quia obcaecati eum molestias vitae excepturi
                  iusto assumenda officia hic voluptates, beatae exercitationem
                  quod, reprehenderit, corrupti architecto tempora dolores
                  pariatur
                </p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">Quick Links</h2>
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
              <div className="col-span-12 md:col-span-3">
                <h2 className="text-2xl font-bold mb-2">Support</h2>
                {supportLinks.map((elem) => (
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
          </div>
          <div className="border-t-[1px] border-[#19392e] py-3">
            <div className="mx-auto max-w-7xl px-2 py-3 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-300">
                  Copyright &copy; {currentYear} | All Rights Reserved
                </p>
                <ul className="flex gap-3">
                  {socialMediaLinks.map((elem, id) => (
                    <li
                      key={id}
                      className=" w-8 h-8 flex justify-center items-center rounded-full border border-gray-400 text-xl text-gray-200 cursor-pointer bg-transparent hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                    >
                      <NavLink to={elem.href}>
                        <elem.icon className="text-md p-0.5" />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
