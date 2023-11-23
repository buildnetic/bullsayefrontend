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
import { BsInfoCircle } from "react-icons/bs";
import Info from "../../../../components/Modals/Info";
import { useState } from "react";
import AchievedCallDetails from "../../../../components/Modals/AchievedCallDetails";

const TopPerformers = () => {
  const [accuracyInfoOpen, setAccuracyInfoOpen] = useState(false);
  const [buyingInfoOpen, setBuyingInfoOpen] = useState(false);
  const [sellingInfoOpen, setSellingInfoOpen] = useState(false);
  const [achievedCallOpen, setAchievedCallOpen] = useState(false);
  const [achievedCallType, setAchievedCallType] = useState("");
  const [achievedCallData, setAchievedCallData] = useState([]);

  const buyingAchieveData = [
    {
      stock_name: "Infosys",
      stock_code: "INFY",
      exchange_code: "NSE",
      current_price: "₹ 1050",
      target_price: "₹ 1200",
      achieved_in: "8 days",
    },
    {
      stock_name: "TATA",
      stock_code: "TATA",
      exchange_code: "NSE",
      current_price: "₹ 800",
      target_price: "₹ 850",
      achieved_in: "3 days",
    },
    {
      stock_name: "Apple",
      stock_code: "AAPL",
      exchange_code: "NASDAQ",
      current_price: "$ 200",
      target_price: "$ 300",
      achieved_in: "6 days",
    },
    {
      stock_name: "Infosys",
      stock_code: "INFY",
      exchange_code: "NSE",
      current_price: "₹ 1050",
      target_price: "₹ 1200",
      achieved_in: "8 days",
    },
    {
      stock_name: "TATA",
      stock_code: "TATA",
      exchange_code: "NSE",
      current_price: "₹ 800",
      target_price: "₹ 850",
      achieved_in: "3 days",
    },
    {
      stock_name: "Apple",
      stock_code: "AAPL",
      exchange_code: "NASDAQ",
      current_price: "$ 200",
      target_price: "$ 300",
      achieved_in: "6 days",
    },
  ];
  const sellingAchieveData = [
    {
      stock_name: "Apple",
      stock_code: "AAPL",
      exchange_code: "NASDAQ",
      current_price: "$ 200",
      target_price: "$ 100",
      achieved_in: "6 days",
    },
    {
      stock_name: "TATA",
      stock_code: "TATA",
      exchange_code: "NSE",
      current_price: "₹ 800",
      target_price: "₹ 650",
      achieved_in: "3 days",
    },
    {
      stock_name: "Infosys",
      stock_code: "INFY",
      exchange_code: "NSE",
      current_price: "₹ 1050",
      target_price: "₹ 900",
      achieved_in: "7 days",
    },
    {
      stock_name: "Apple",
      stock_code: "AAPL",
      exchange_code: "NASDAQ",
      current_price: "$ 200",
      target_price: "$ 100",
      achieved_in: "6 days",
    },
    {
      stock_name: "TATA",
      stock_code: "TATA",
      exchange_code: "NSE",
      current_price: "₹ 800",
      target_price: "₹ 650",
      achieved_in: "3 days",
    },
    {
      stock_name: "Infosys",
      stock_code: "INFY",
      exchange_code: "NSE",
      current_price: "₹ 1050",
      target_price: "₹ 900",
      achieved_in: "7 days",
    },
  ];

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

  const achievedCallsHandler = (type, data) => {
    setAchievedCallOpen(true);
    setAchievedCallType(type);

    setAchievedCallData(data);
  };

  return (
    <>
      <div id="topPerformers" className="overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
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

          <div className="grid grid-cols-12 gap-y-10 sm:gap-10 md:gap-12 pt-9">
            {getTopPerformersQuery?.data?.data?.data?.map((elem, id) => (
              <motion.div
                className="col-span-12 lg:col-span-3 sm:col-span-6 xs:col-span-12 group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                key={id}
                variants={fadeInBottom}
                initial="hidden"
                whileInView="visible"
              >
                <div className="relative mb-3 flex justify-center">
                  <div className="w-full h-20 object-cover rounded-b-3xl opacity-90 overflow-hidden">
                    <img
                      src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"
                      alt="Profile cover image"
                      className="w-full h-full object-cover rounded-b-3xl opacity-90 group-hover:scale-110 transition duration-700 ease-in-out"
                    />
                  </div>
                  <div className="absolute top-3/4 z-10 w-14 h-14 rounded-full border-4 border-white overflow-hidden">
                    <img
                      src={
                        elem.user_profile_image
                          ? elem.user_profile_image
                          : ProfileImg
                      }
                      alt="Profile Icon"
                      className={`rounded-full h-full group-hover:scale-125 transition duration-700 ease-in-out  ${
                        !elem.user_profile_image && "p-1.5 bg-white"
                      }`}
                    />
                  </div>
                </div>

                <div className="p-6">
                  <NavLink
                    to={`/profile/${elem.id}`}
                    className="block mt-1 text-sm font-bold text-center capitalize text-gray-800 hover:text-c-green transition-all"
                  >
                    {elem.name}
                  </NavLink>
                  <p className="flex items-center justify-center gap-1 text-xs text-[#8E8E8E] mt-0.5">
                    Rank:{" "}
                    <span className="text-c-green font-bold">{elem.rank}</span>
                    <BsInfoCircle
                      onClick={() => setAccuracyInfoOpen(true)}
                      className=" cursor-pointer text-gray-400 hover:text-gray-600 transition duration-200 ease-in-out"
                    />
                  </p>
                  <div className="flex flex-row justify-around mt-2">
                    <p className="text-[#8E8E8E] text-center text-xs">
                      <span className="font-bold block text-lg text-gray-600">
                        {elem.followers_count}
                      </span>{" "}
                      followers
                    </p>
                    <p className="text-[#8E8E8E] text-center text-xs">
                      <span className="font-bold block text-lg text-gray-600">
                        {elem.following_count}
                      </span>{" "}
                      following
                    </p>
                  </div>

                  <p className="mt-3 text-xs">
                    {elem.about ? (
                      elem.about
                    ) : (
                      <span className=" text-gray-400">
                        not added about yet...
                      </span>
                    )}
                  </p>

                  {/* <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div> */}

                  {/* <div className="flex flex-row justify-around mt-2">
                    <div className="text-center">
                      <p
                        className="text-green-500 font-bold mb-0.5 text-md cursor-pointer hover:text-green-700 transition"
                        title="click to view all achieved buying calls"
                        onClick={() =>
                          achievedCallsHandler("Buying", buyingAchieveData)
                        }
                      >
                        0/{elem.buy_post_count}
                      </p>
                      <div className=" flex items-center gap-1">
                        <p className="text-[#8E8E8E] text-xs">Buying</p>
                        <BsInfoCircle
                          onClick={() => setBuyingInfoOpen(true)}
                          className="text-xs cursor-pointer text-gray-400 hover:text-gray-600 transition duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <p
                        className="text-red-500 font-bold mb-0.5 text-md cursor-pointer hover:text-red-800 transition"
                        title="click to view all achieved selling calls"
                        onClick={() =>
                          achievedCallsHandler("Selling", sellingAchieveData)
                        }
                      >
                        0/{elem.sell_post_count}
                      </p>
                      <div className=" flex items-center gap-1">
                        <p className="text-[#8E8E8E] text-xs">Selling</p>
                        <BsInfoCircle
                          onClick={() => setSellingInfoOpen(true)}
                          className="text-xs cursor-pointer text-gray-400 hover:text-gray-600 transition duration-200 ease-in-out"
                        />
                      </div>
                    </div>
                  </div> */}
                </div>

                <motion.div
                  className="absolute top-0 left-0 right-0 backdrop-blur-sm px-8 py-[1.6rem] rounded-b-3xl border-2 border-t-0 border-gray-100 hidden group-hover:block"
                  variants={fadeInTop}
                  initial="hidden"
                  whileInView="visible"
                >
                  <ul className="flex justify-between gap-3">
                    {socialMediaLinks.map((elem, id) => (
                      <li
                        key={id}
                        className={`w-7 h-7 flex justify-center items-center rounded-full text-xl text-white cursor-pointer hover:text-white transition-all`}
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

          {getTopPerformersQuery?.data?.data?.data?.length === 0 && (
            <p className="text-gray-400 text-center">
              There are NO Top Performers
            </p>
          )}
        </div>
      </div>

      <Info
        open={accuracyInfoOpen}
        setOpen={setAccuracyInfoOpen}
        infoDetails={
          "Accuracy info Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id quidem illum quasi assumenda suscipit"
        }
      />
      <Info
        open={buyingInfoOpen}
        setOpen={setBuyingInfoOpen}
        infoDetails={
          "Buying info Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id quidem illum quasi assumenda suscipit"
        }
      />
      <Info
        open={sellingInfoOpen}
        setOpen={setSellingInfoOpen}
        infoDetails={
          "Selling info Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id quidem illum quasi assumenda suscipit"
        }
      />

      <AchievedCallDetails
        open={achievedCallOpen}
        setOpen={setAchievedCallOpen}
        type={achievedCallType}
        data={achievedCallData}
      />
    </>
  );
};

export default TopPerformers;
