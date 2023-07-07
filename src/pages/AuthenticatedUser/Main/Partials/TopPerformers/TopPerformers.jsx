import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

const TopPerformers = () => {
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
        <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
          <div className="p-3 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-0.5 ml-0.5 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Profile Icon"
              className="w-14 rounded-full mx-auto"
            />
            <NavLink
              to="/user/1"
              className="mt-1 text-[15px] font-semibold text-center"
            >
              John Dev
            </NavLink>
            <p className="text-center text-sm text-[#8E8E8E] mt-1">
              Accuracy Index: <br />
              <span className="text-c-green font-semibold">
                +3.10% (2 Months)
              </span>
            </p>
            <div className="flex flex-row justify-around mt-2">
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">4M</span> followers
              </p>
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">456</span> following
              </p>
            </div>
            <a
              href="#"
              className="text-center mt-2 block rounded-lg border-c-green border-2 bg-c-green p-1 px-2 shadow-md hover:shadow-none text-white duration-75 text-xs font-medium"
            >
              Follow
            </a>
            <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
            <div className="flex flex-row justify-around mt-2">
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Buying Accuracy</p>
                <p className="text-c-green font-semibold mt-0.5 text-sm">
                  20/50
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Selling Accuracy</p>
                <p className="text-[#EF413E] font-semibold mt-0.5 text-sm">
                  30/50
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
          <div className="p-3 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-0.5 ml-0.5 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Profile Icon"
              className="w-14 rounded-full mx-auto"
            />
            <NavLink
              to="/user/1"
              className="mt-1 text-[15px] font-semibold text-center"
            >
              John Dev
            </NavLink>
            <p className="text-center text-sm text-[#8E8E8E] mt-1">
              Accuracy Index: <br />
              <span className="text-c-green font-semibold">
                +3.10% (2 Months)
              </span>
            </p>
            <div className="flex flex-row justify-around mt-2">
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">4M</span> followers
              </p>
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">456</span> following
              </p>
            </div>
            <a
              href="#"
              className="text-center mt-2 block rounded-lg border-c-green border-2 bg-c-green p-1 px-2 shadow-md hover:shadow-none text-white duration-75 text-xs font-medium"
            >
              Follow
            </a>
            <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
            <div className="flex flex-row justify-around mt-2">
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Buying Accuracy</p>
                <p className="text-c-green font-semibold mt-0.5 text-sm">
                  20/50
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Selling Accuracy</p>
                <p className="text-[#EF413E] font-semibold mt-0.5 text-sm">
                  30/50
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
          <div className="p-3 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-0.5 ml-0.5 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Profile Icon"
              className="w-14 rounded-full mx-auto"
            />
            <NavLink
              to="/user/1"
              className="mt-1 text-[15px] font-semibold text-center"
            >
              John Dev
            </NavLink>
            <p className="text-center text-sm text-[#8E8E8E] mt-1">
              Accuracy Index: <br />
              <span className="text-c-green font-semibold">
                +3.10% (2 Months)
              </span>
            </p>
            <div className="flex flex-row justify-around mt-2">
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">4M</span> followers
              </p>
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">456</span> following
              </p>
            </div>
            <a
              href="#"
              className="text-center mt-2 block rounded-lg border-c-green border-2 bg-c-green p-1 px-2 shadow-md hover:shadow-none text-white duration-75 text-xs font-medium"
            >
              Follow
            </a>
            <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
            <div className="flex flex-row justify-around mt-2">
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Buying Accuracy</p>
                <p className="text-c-green font-semibold mt-0.5 text-sm">
                  20/50
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Selling Accuracy</p>
                <p className="text-[#EF413E] font-semibold mt-0.5 text-sm">
                  30/50
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
          <div className="p-3 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mt-0.5 ml-0.5 bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Profile Icon"
              className="w-14 rounded-full mx-auto"
            />
            <NavLink
              to="/user/1"
              className="mt-1 text-[15px] font-semibold text-center"
            >
              John Dev
            </NavLink>
            <p className="text-center text-sm text-[#8E8E8E] mt-1">
              Accuracy Index: <br />
              <span className="text-c-green font-semibold">
                +3.10% (2 Months)
              </span>
            </p>
            <div className="flex flex-row justify-around mt-2">
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">4M</span> followers
              </p>
              <p className="text-[#8E8E8E] text-xs text-center">
                <span className="font-semibold">456</span> following
              </p>
            </div>
            <a
              href="#"
              className="text-center mt-2 block rounded-lg border-c-green border-2 bg-c-green p-1 px-2 shadow-md hover:shadow-none text-white duration-75 text-xs font-medium"
            >
              Follow
            </a>
            <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
            <div className="flex flex-row justify-around mt-2">
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Buying Accuracy</p>
                <p className="text-c-green font-semibold mt-0.5 text-sm">
                  20/50
                </p>
              </div>
              <div className="text-center">
                <p className="text-[#8E8E8E] text-xs">Selling Accuracy</p>
                <p className="text-[#EF413E] font-semibold mt-0.5 text-sm">
                  30/50
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default TopPerformers;
