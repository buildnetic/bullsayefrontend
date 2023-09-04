import { NavLink } from "react-router-dom";
import axiosInstance from "../../../../axiosInstance";
import { useQuery } from "react-query";
import ProfileImg from "../../../../assets/images/profile-icon.png";

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
      <div id="topPerformers" className=" bg-gray-50">
        <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h2 className="text-4xl mt-5 font-bold text-center text-c-green">
            Top Performers
          </h2>
          <p className="mt-3 text-xl text-center">
            What our customers say What our customers say What our customers say
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-9">
            {getTopPerformersQuery?.data?.data?.data?.map((elem, id) => (
              <div
                className="p-6 px-8 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                key={id}
              >
                <img
                  src={
                    elem.user_profile_image
                      ? elem.user_profile_image
                      : ProfileImg
                  }
                  alt="Profile Icon"
                  className={`w-16 h-16 rounded-full mx-auto border-2 border-gray-100 object-cover ${
                    !elem.user_profile_image && "p-1.5"
                  }`}
                />
                <NavLink
                  to={`/profile/${elem.id}`}
                  className="block mt-1 text-md font-bold text-center"
                >
                  {elem.name}
                </NavLink>
                <p className="text-center text-sm text-[#8E8E8E] mt-1">
                  Accuracy Index:{" "}
                  <span className="text-c-green font-bold">
                    +3.10% (2 Months)
                  </span>
                </p>
                <div className="flex flex-row justify-around mt-2">
                  <p className="text-[#8E8E8E]">
                    <span className="font-bold">{elem.followers_count}</span>{" "}
                    followers
                  </p>
                  <p className="text-[#8E8E8E]">
                    <span className="font-bold">{elem.following_count}</span>{" "}
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
                {/* <a
                href="#"
                className="text-center mt-4 block rounded-lg border-c-green border-2 bg-c-green p-2 px-4 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
              >
                Follow
              </a> */}
                <div className="my-3 w-full h-[2px] bg-[#D3DAE2]"></div>
                <div className="flex flex-row justify-around mt-2">
                  <div className="text-center">
                    <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
                    <p className="text-c-green font-bold mt-0.5">
                      0/{elem.buy_post_count}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
                    <p className="text-[#EF413E] font-bold mt-0.5">
                      0/{elem.sell_post_count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPerformers;
