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
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";
import { FaAward } from "react-icons/fa";
import Lottie from "lottie-react";
import StockMarket2 from "../../../../lottie/stockMarket2.json";

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
      <div className="bg-[url('https://themewagon.github.io/applab_2/v1.0.0/assets/img/illustrations/hero-bg.png')] bg-cover bg-center min-h-screen pt-32 sm:pt-40 lg:pt-0 overflow-hidden">
        <div className="min-h-screen mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative">
          <div className="grid grid-cols-12 items-center">
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <div className="flex items-center gap-2 bg-[#f2f5f7] max-w-sm p-2 rounded-2xl mb-5">
                <div className="bg-yellow-500 flex justify-center items-center p-2 rounded-3xl">
                  <FaAward className="text-white text-lg" />
                </div>
                <h2 className="text-sm">
                  #1 Traders Choice application of 2023
                </h2>
              </div>

              <h1 className="text-5xl md:text-5xl font-semibold leading-[4rem] md:leading-[5rem] lg:leading-[5rem] text-gray-800 capitalize">
                {/* <span className=" text-green-500">Buying</span> and{" "}
                <span className=" text-red-500">Selling</span> <br /> Calls from
                Expert */}
                <span className=" text-orange-600 font-bold">Stay ahead</span>{" "}
                in the market game with{" "}
                <span className=" text-green-600 font-bold">our Expert</span>{" "}
                analysis.
              </h1>

              <div className="flex gap-5 items-center mt-5">
                <PrimaryButton
                  to="/"
                  classes="text-white bg-c-green px-8 py-3 font-medium"
                  rounded="lg"
                  title="Try for Free"
                />
                <PrimaryButton
                  to="https://youtube.com"
                  classes="text-c-green hover:text-white border bg-white px-8 py-3 font-medium"
                  rounded="lg"
                  title="Watch demo video"
                />
              </div>

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
                animationData={StockMarket2}
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
