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
import StockMarket from "../../../../lottie/stockMarket.json";
import Lottie from "lottie-react";

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
      <div className="mt-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative">
          <div className="grid grid-cols-12 items-center">
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h1 className="text-5xl md:text-6xl font-extrabold leading-[4rem] md:leading-[5rem] lg:leading-[6rem] text-gray-800">
                <span className=" text-green-500">Buying</span> &{" "}
                <span className=" text-red-500">Selling</span> <br /> Calls from
                Expert
              </h1>

              {/* <PrimaryButton
                to="/main"
                classes="text-white bg-c-green px-8 py-3 font-medium mt-7"
                rounded="lg"
                title="Start Investing"
              /> */}

              <div className="mt-8">
                <p className="text-md font-semibold text-gray-500">Follow Us</p>
                <ul className="mt-3 flex gap-3">
                  {socialMediaLinks.map((elem, id) => (
                    <li
                      key={id}
                      className=" w-10 h-10 flex justify-center items-center rounded-full border-2 border-gray-200 text-xl text-blue-900 cursor-pointer bg-gray-100 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all"
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
              <Lottie
                animationData={StockMarket}
                className="animate-left-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
