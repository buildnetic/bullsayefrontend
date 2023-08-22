import axios from "axios";
import { useQuery } from "react-query";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import LoadingMarketOverview from "./LoadingMarketOverview";

const MarketAnalysis = () => {
  const [markets, setMarkets] = useState({
    usa: [],
    europe: [],
    asia: [],
    currencies: [],
    crypto: [],
  });

  const getMarketOverviewFn = async () => {
    const res = await axios.get(
      `/api/search.json?engine=google_finance&api_key=${
        import.meta.env.VITE_APP_GOOGLE_FIN_TOKEN
      }&q=INFY:NSE`
    );
    return res;
  };

  const getMarketOverviewQuery = useQuery(
    "getMarketOverview",
    getMarketOverviewFn,
    {
      onSuccess: (res) => {
        console.log(res?.data?.markets);

        setMarkets((prev) => ({
          ...prev,
          usa: res?.data?.markets?.us,
          europe: res?.data?.markets?.europe,
          asia: res?.data?.markets?.asia,
          currencies: res?.data?.markets?.currencies,
          crypto: res?.data?.markets?.crypto,
        }));
      },
    }
  );

  console.log(markets);

  return (
    <>
      {getMarketOverviewQuery.isLoading ? (
        <LoadingMarketOverview />
      ) : getMarketOverviewQuery.isError ? (
        "Failed to fetch details"
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="mySwiper main-top-performers"
        >
          <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
            <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
              <h2 className="text-gray-700 font-semibold text-md">USA</h2>
              {markets?.usa?.map((elem, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left ${
                    elem.price_movement.movement === "Up"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  } `}
                >
                  <div className="col-span-2 flex items-center">
                    {elem.price_movement.movement === "Up" ? (
                      <BsFillArrowUpCircleFill className="text-2xl text-green-600" />
                    ) : (
                      <BsFillArrowDownCircleFill className="text-2xl text-red-600" />
                    )}
                  </div>
                  <div className=" col-span-7">
                    <strong className="block">{elem.name}</strong>
                    <span className="block">{elem.price.toFixed(2)}</span>
                  </div>
                  <div className=" col-span-3">
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.percentage.toFixed(2)} %`}
                    </span>
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.value.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
            <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
              <h2 className="text-gray-700 font-semibold text-md">Europe</h2>
              {markets?.europe?.map((elem, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left ${
                    elem.price_movement.movement === "Up"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  } `}
                >
                  <div className="col-span-2 flex items-center">
                    {elem.price_movement.movement === "Up" ? (
                      <BsFillArrowUpCircleFill className="text-2xl text-green-600" />
                    ) : (
                      <BsFillArrowDownCircleFill className="text-2xl text-red-600" />
                    )}
                  </div>
                  <div className=" col-span-7">
                    <strong className="block">{elem.name}</strong>
                    <span className="block">{elem.price.toFixed(2)}</span>
                  </div>
                  <div className=" col-span-3">
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.percentage.toFixed(2)} %`}
                    </span>
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.value.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
            <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
              <h2 className="text-gray-700 font-semibold text-md">Asia</h2>
              {markets?.asia?.map((elem, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left ${
                    elem.price_movement.movement === "Up"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  } `}
                >
                  <div className="col-span-2 flex items-center">
                    {elem.price_movement.movement === "Up" ? (
                      <BsFillArrowUpCircleFill className="text-2xl text-green-600" />
                    ) : (
                      <BsFillArrowDownCircleFill className="text-2xl text-red-600" />
                    )}
                  </div>
                  <div className=" col-span-7">
                    <strong className="block">{elem.name}</strong>
                    <span className="block">{elem.price.toFixed(2)}</span>
                  </div>
                  <div className=" col-span-3">
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.percentage.toFixed(2)} %`}
                    </span>
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.value.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
            <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
              <h2 className="text-gray-700 font-semibold text-md">
                Currencies
              </h2>
              {markets?.currencies?.map((elem, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left ${
                    elem.price_movement.movement === "Up"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  } `}
                >
                  <div className="col-span-2 flex items-center">
                    {elem.price_movement.movement === "Up" ? (
                      <BsFillArrowUpCircleFill className="text-2xl text-green-600" />
                    ) : (
                      <BsFillArrowDownCircleFill className="text-2xl text-red-600" />
                    )}
                  </div>
                  <div className=" col-span-7">
                    <strong className="block">{elem.name}</strong>
                    <span className="block">{elem.price.toFixed(2)}</span>
                  </div>
                  <div className=" col-span-3">
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.percentage.toFixed(2)} %`}
                    </span>
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.value.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-10" style={{ height: "max-content" }}>
            <div className="w-full border-2 border-gray-100 shadow-sm rounded-md p-2">
              <h2 className="text-gray-700 font-semibold text-md">Crypto</h2>
              {markets?.crypto?.map((elem, id) => (
                <div
                  key={id}
                  className={`grid grid-cols-12 px-3 py-2 rounded text-sm mt-2 text-left ${
                    elem.price_movement.movement === "Up"
                      ? "bg-green-100 border border-green-400 text-green-700"
                      : "bg-red-100 border border-red-400 text-red-700"
                  } `}
                >
                  <div className="col-span-2 flex items-center">
                    {elem.price_movement.movement === "Up" ? (
                      <BsFillArrowUpCircleFill className="text-2xl text-green-600" />
                    ) : (
                      <BsFillArrowDownCircleFill className="text-2xl text-red-600" />
                    )}
                  </div>
                  <div className=" col-span-7">
                    <strong className="block">{elem.name}</strong>
                    <span className="block">{elem.price.toFixed(2)}</span>
                  </div>
                  <div className=" col-span-3">
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.percentage.toFixed(2)} %`}
                    </span>
                    <span className="block">
                      {`${
                        elem.price_movement.movement === "Up" ? "+" : "-"
                      } ${elem.price_movement.value.toFixed(2)}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </>
  );
};

export default MarketAnalysis;
