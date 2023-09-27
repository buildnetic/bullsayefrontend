import { NavLink } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";
import { useQuery } from "react-query";
import ProfileImg from "../../../../assets/images/profile-icon.png";
import { motion } from "framer-motion";
import { fadeInBottom, fadeInTop } from "../../../../data/framerMotionHelper";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const TopPerformers = () => {
  const getTopPerformersFn = async () => {
    return await axiosInstance.get("/user/topPerformer");
  };

  const getTopPerformersQuery = useQuery(
    "getTopPerformers",
    getTopPerformersFn
  );

  const socialMediaLinks = [
    {
      icon: BiLogoFacebook,
      href: "/facebook",
      bg: "#4267B2",
    },
    {
      icon: BiLogoLinkedin,
      href: "/linkedin",
      bg: "#0072b1",
    },
    {
      icon: BiLogoInstagram,
      href: "/instagram",
      bg: "#E1306C",
    },
    {
      icon: BiLogoYoutube,
      href: "/youtube",
      bg: "#CD201F",
    },
    {
      icon: BiLogoTwitter,
      href: "/twitter",
      bg: "#26a7de ",
    },
  ];

  return (
    <>
      <div id="topPerformers" className="">
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <motion.h2
            className="text-4xl mt-5 font-bold text-center text-c-green"
            variants={fadeInTop}
            initial="hidden"
            whileInView="visible"
          >
            Top Performers
          </motion.h2>
          <p className="mt-3 text-md text-gray-400 text-center">
            What our customers say What our customers say What our customers say
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 pt-9">
            {getTopPerformersQuery?.data?.data?.data?.map((elem, id) => (
              <motion.div
                className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                key={id}
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
              >
                <div className=" relative mb-6">
                  <img
                    src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
                    alt="Profile cover image"
                    className=" w-full h-24 object-cover rounded-b-3xl opacity-90"
                  />
                  <img
                    src={
                      elem.user_profile_image
                        ? elem.user_profile_image
                        : ProfileImg
                    }
                    alt="Profile Icon"
                    className={` absolute top-2/3 left-[39%] z-10 w-20 h-20 rounded-full 
                    mx-auto border-4 border-white object-cover 
                    ${!elem.user_profile_image && "p-1.5 bg-white"}`}
                  />
                </div>

                <div className="p-6 px-8">
                  <NavLink
                    to={`/profile/${elem.id}`}
                    className="block mt-1 text-md font-bold text-center capitalize text-gray-800 hover:text-c-green transition-all"
                  >
                    {elem.name}
                  </NavLink>
                  <p className="text-center text-sm text-[#8E8E8E] mt-1">
                    Accuracy Index:{" "}
                    <span className="text-c-green font-bold">+3.10%</span>
                  </p>
                  <div className="flex flex-row justify-around mt-2">
                    <p className="text-[#8E8E8E] text-center text-sm">
                      <span className="font-bold block text-xl text-c-green">
                        {elem.followers_count}
                      </span>{" "}
                      followers
                    </p>
                    <p className="text-[#8E8E8E] text-center text-sm">
                      <span className="font-bold block text-xl text-c-green">
                        {elem.following_count}
                      </span>{" "}
                      following
                    </p>
                  </div>

                  <NavLink
                    to={`/profile/${elem.id}`}
                    className="text-center mt-3 block rounded-3xl border-c-green border-2 bg-c-green p-2 px-4 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
                  >
                    View Calls
                  </NavLink>
                  <p className="mt-3 text-sm">
                    {elem.about ? (
                      elem.about
                    ) : (
                      <span className=" text-gray-400">
                        not added about yet...
                      </span>
                    )}
                  </p>

                  <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
                  <p className="text-center text-sm text-gray-500 font-semibold">
                    Accuracy
                  </p>
                  <div className="flex flex-row justify-around mt-2">
                    <div className="text-center">
                      <p className="text-c-green font-bold mb-0.5 text-md">
                        0/{elem.buy_post_count}
                      </p>
                      <p className="text-[#8E8E8E] text-sm">Buying</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#EF413E] font-bold mb-0.5 text-md">
                        0/{elem.sell_post_count}
                      </p>
                      <p className="text-[#8E8E8E] text-sm">Selling</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 bg-gray-100 px-8 py-7 rounded-t-3xl shadow-xl hidden group-hover:block"
                  variants={fadeInBottom}
                  initial="hidden"
                  whileInView="visible"
                >
                  <ul className="flex justify-between gap-3">
                    {socialMediaLinks.map((elem, id) => (
                      <li
                        key={id}
                        className={`w-10 h-10 flex justify-center items-center rounded-full text-xl text-white cursor-pointer hover:text-white transition-all`}
                        style={{ backgroundColor: elem.bg }}
                      >
                        <NavLink to={elem.href}>
                          <elem.icon />
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPerformers;
