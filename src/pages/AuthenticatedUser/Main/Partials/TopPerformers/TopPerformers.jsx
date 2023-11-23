import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import axiosInstance from "../../../../../axiosInstance";
import { useQuery } from "react-query";
import ProfileImg from "../../../../../assets/images/profile-icon.png";

const TopPerformers = () => {
  const getTopPerformersFn = async () => {
    return await axiosInstance.get("/user/topPerformer");
  };

  const getTopPerformersQuery = useQuery(
    "getTopPerformersSlider",
    getTopPerformersFn
  );

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper main-top-performers"
      >
        {getTopPerformersQuery?.data?.data?.data?.map((elem, id) => (
          <SwiperSlide
            className="pb-10"
            style={{ height: "max-content" }}
            key={id}
          >
            <div className="p-3 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-0.5 ml-0.5 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
              <img
                src={
                  elem.user_profile_image ? elem.user_profile_image : ProfileImg
                }
                alt="Profile Icon"
                className={`w-12 h-12 rounded-full mx-auto border-2 border-gray-100 object-cover ${
                  !elem.user_profile_image && "p-1.5"
                }`}
              />
              <NavLink
                to={`/profile/${elem.id}`}
                className="mt-1 text-[15px] font-semibold text-center block capitalize"
              >
                {elem.name}
              </NavLink>
              <p className="text-center text-xs text-[#8E8E8E] mt-1">
                Rank:
                <span className="text-c-green text-sm font-semibold ml-1">
                  {elem.rank}
                </span>
              </p>
              <div className="flex flex-row justify-around mt-2">
                <p className="text-[#8E8E8E] text-xs text-center">
                  <span className="font-semibold">{elem.followers_count}</span>{" "}
                  followers
                </p>
                <p className="text-[#8E8E8E] text-xs text-center">
                  <span className="font-semibold">{elem.following_count}</span>{" "}
                  following
                </p>
              </div>
              {/* <a
                href="#"
                className="text-center mt-2 block rounded-lg border-c-green border-2 bg-c-green p-1 px-2 shadow-md hover:shadow-none text-white duration-75 text-xs font-medium"
              >
                Follow
              </a> */}
              {/* <div className="my-2 w-full h-[2px] bg-[#D3DAE2]"></div>
              <div className="flex flex-row justify-around mt-2">
                <div className="text-center">
                  <p className="text-[#8E8E8E] text-xs">Buying Accuracy</p>
                  <p className="text-c-green font-semibold mt-0.5 text-sm">
                    0/{elem.buy_post_count}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[#8E8E8E] text-xs">Selling Accuracy</p>
                  <p className="text-[#EF413E] font-semibold mt-0.5 text-sm">
                    0/{elem.sell_post_count}
                  </p>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopPerformers;
