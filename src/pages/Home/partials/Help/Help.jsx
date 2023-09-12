import Lottie from "lottie-react";
import HelpImg from "../../../../lottie/help.json";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../../../../data/framerMotionHelper";

const Help = () => {
  return (
    <>
      <div id="help" className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-2 py-8 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="grid grid-cols-12 gap-3 text-center items-center">
            <motion.div
              className="col-span-12 md:col-span-7"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
            >
              <h2 className="text-4xl font-bold text-c-green">
                Join Our Community
              </h2>
              <h3 className="text-md mt-1">Get our email for info</h3>
              <input
                // className="mt-5 p-2 px-3 w-60 text-md"
                className="w-60 mt-5 p-2 px-3 rounded-s-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
                type="text"
                placeholder="Enter your Email address"
              />
              <button className="bg-c-green p-2 px-3 text-white rounded-e-md text-md">
                Subscribe
              </button>
              <p className="text-xs mt-3">
                By subscribing you agree to our Terms & Conditions and Privacy &
                Cookies Policy
              </p>

              <h2 className="text-xl mt-4">Need Help? +61-7596286</h2>
              <p className="text-md mt-3">
                <span className="font-bold">Working Days / Hours:</span> Mon -
                Sat / 09:00 - 18:00
              </p>
            </motion.div>
            <motion.div
              className="col-span-12 md:col-span-5"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
            >
              <Lottie animationData={HelpImg} />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
