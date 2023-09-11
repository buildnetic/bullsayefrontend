import { motion } from "framer-motion";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { fadeInLeft } from "../../../../data/framerMotionHelper";

const Hero = () => {
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
      <div className="bg-[url('../../../images/home/bg.png')] bg-cover bg-center min-h-screen pt-32 sm:pt-40 lg:pt-0 overflow-hidden">
        <div className="min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative">
          <div className="grid grid-cols-12 items-center">
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-[4rem] md:leading-[5rem] lg:leading-[6rem] text-gray-800">
                <span className=" text-green-500">Buying</span> and{" "}
                <span className=" text-red-500">Selling</span> <br /> Calls from{" "}
                Expert
              </h1>
              <p className="text-xl md:text-xl text-gray-400 mt-3">
                Do your research before investment{" "}
              </p>
              <NavLink
                to="/main"
                className="mt-7 relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-c-green rounded-lg group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-c-green"></span>
                <span className="relative">Start Investing</span>
              </NavLink>
              <div className="mt-8">
                <p className="text-md font-semibold text-gray-500">Follow Us</p>
                <ul className="mt-3 flex gap-3">
                  {socialMediaLinks.map((elem, id) => (
                    <li
                      key={id}
                      className=" w-10 h-10 flex justify-center items-center rounded-full border-2 border-gray-200 text-xl text-blue-900 cursor-pointer hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
                    >
                      <NavLink to={elem.href}>
                        <elem.icon />
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <div className="col-span-12 lg:col-span-6">
              <img
                src="../../../images/home/hero-img.png"
                alt="Hero Image"
                className=" animate-left-right"
              />
            </div>
          </div>

          <div className=" absolute top-[6rem]">
            <img
              src="../../../images/home/coin.png"
              alt="coin"
              className="animate-spin-slow"
            />
          </div>
          <div className=" absolute bottom-16 left-2/4">
            <img
              src="../../../images/home/rectangle.png"
              alt="rectangle"
              className="animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
