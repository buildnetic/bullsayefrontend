import { motion } from "framer-motion";
import {
  fadeInBottom,
  fadeInLeft,
  fadeInRight,
  fadeInTop,
} from "../../../../data/framerMotionHelper";
import Lottie from "lottie-react";
import UserIcon from "../../../../lottie/userIcon.json";
import GraphIcon from "../../../../lottie/graphIcon.json";
import MoneyIcon from "../../../../lottie/moneyIcon.json";
import ArrowIcon from "../../../../lottie/arrow.json";

const HowItWorks = () => {
  return (
    <>
      <div
        id="howItWorks"
        className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center overflow-hidden"
      >
        <motion.h2
          className="text-4xl mt-5 font-bold text-center text-c-green"
          variants={fadeInTop}
          initial="hidden"
          whileInView="visible"
        >
          How It Works
        </motion.h2>
        <p className="mt-3 text-md text-gray-400 text-center">
          What our customers say What our customers say What our customers say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-9">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
          >
            <Lottie
              animationData={UserIcon}
              className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-8 rounded-full"
            />
            {/* <UserIcon className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-8 rounded-full" /> */}
            <h3 className="text-center mt-4 text-xl font-bold">
              Follow the Experts
            </h3>
            <p className="text-center mt-1">
              Follow the experts on various social media
            </p>
          </motion.div>
          <div>
            <Lottie animationData={ArrowIcon} className="hidden md:block" />
          </div>
          <motion.div
            variants={fadeInBottom}
            initial="hidden"
            whileInView="visible"
          >
            <Lottie
              animationData={GraphIcon}
              className="w-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed p-5 rounded-full"
            />
            <h3 className="text-center mt-4 text-xl font-bold">Unlock Calls</h3>
            <p className="text-center mt-1">
              Unlock the buying and selling calls
            </p>
          </motion.div>
          <div>
            <Lottie animationData={ArrowIcon} className="hidden md:block" />
          </div>
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
          >
            <Lottie
              animationData={MoneyIcon}
              className="w-32 h-32 text-[#F0A151] mx-auto border-[#F0A151] border-2 border-dashed pb-4 pl-4 pr-4 rounded-full"
            />
            <h3 className="text-center mt-4 text-xl font-bold">Invest</h3>
            <p className="text-center mt-1">Invest carefully</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
