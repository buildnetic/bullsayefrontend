import { NavLink } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";
import { useQuery } from "react-query";
import ProfileImg from "../../../../assets/images/profile-icon.png";
import { motion } from "framer-motion";
import { fadeInBottom, fadeInTop } from "../../../../data/framerMotionHelper";

const TopPerformers = () => {
  const getTopPerformersFn = async () => {
    return await axiosInstance.get("/user/topPerformer");
  };

  const getTopPerformersQuery = useQuery(
    "getTopPerformers",
    getTopPerformersFn
  );

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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-9">
            {getTopPerformersQuery?.data?.data?.data?.map((elem, id) => (
              <motion.div
                className="group overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                key={id}
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
              >
                <div className=" relative mb-5">
                  <img
                    src="https://img.freepik.com/free-vector/blue-gradient-blank-background-business_53876-120508.jpg?w=1380&t=st=1694410780~exp=1694411380~hmac=04752037fa08b8b5c4468de0b4caa829811d3383263836476226cd3b0b7d0a46"
                    alt="Profile cover image"
                    className=" w-full h-24 object-cover rounded-b-3xl"
                  />
                  <img
                    src={
                      elem.user_profile_image
                        ? elem.user_profile_image
                        : ProfileImg
                    }
                    alt="Profile Icon"
                    className={` absolute top-2/3 left-[41%] z-10 w-[4.5rem] h-[4.5rem] rounded-full 
                    mx-auto border-2 border-gray-100 object-cover 
                    group-hover:scale-110 transition duration-500
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
                  <p className="mt-2 text-sm">
                    {elem.about ? (
                      elem.about
                    ) : (
                      <span className=" text-gray-400">
                        not added about yet...
                      </span>
                    )}
                  </p>
                  <NavLink
                    to={`/profile/${elem.id}`}
                    className="text-center mt-3 block rounded-3xl border-c-green border-2 bg-c-green p-2 px-4 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
                  >
                    View Profile
                  </NavLink>

                  <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
                  <div className="flex flex-row justify-around mt-2">
                    <div className="text-center">
                      <p className="text-c-green font-bold mb-0.5 text-md">
                        0/{elem.buy_post_count}
                      </p>
                      <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#EF413E] font-bold mb-0.5 text-md">
                        0/{elem.sell_post_count}
                      </p>
                      <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPerformers;
