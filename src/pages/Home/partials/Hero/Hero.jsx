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
      <div className="bg-[url('../../../images/home/bg.png')] bg-cover bg-center h-[90vh] mt-12">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative">
          <div className="grid grid-cols-12 items-center">
            <motion.div
              className=" col-span-6"
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
                className="block mt-7 max-w-max rounded-lg border-c-green border-2 bg-c-green p-3 px-4 shadow-md hover:shadow-none text-white duration-75 text-md font-medium"
              >
                Start Investing
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
            <div className=" col-span-6">
              <img
                src="../../../images/home/hero-img.png"
                alt="Hero Image"
                className=" animate-left-right"
              />
            </div>
          </div>

          <div className=" absolute top-16">
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
