import { useSelector } from "react-redux";
import axiosInstance from "../../../axiosInstance";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import ProfileImg from "../../../assets/images/profile-icon.png";

const Users = () => {
  const { loggedUser } = useSelector((state) => state.user);

  const getAllUsersFn = async () => {
    return await axiosInstance.get(`/getAllUsers`, {
      headers: {
        Authorization: `Bearer ${loggedUser.token}`,
      },
    });
  };

  const getAllUsersQuery = useQuery("getAllUsers", getAllUsersFn);
  console.log(getAllUsersQuery);

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {getAllUsersQuery?.data?.data?.data?.map((elem, id) => (
            <div
              className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
              key={id}
            >
              <img
                src={
                  !elem.user.user_profile_image
                    ? ProfileImg
                    : elem.user.user_profile_image
                }
                alt="Profile Icon"
                className={`w-16 h-16 rounded-full mx-auto border-2 border-gray-100 object-cover ${
                  !elem.user.user_profile_image && "p-1.5"
                }`}
              />
              <NavLink
                to={`/profile/${elem.user.id}`}
                className="block mt-1 text-md font-bold text-center capitalize"
              >
                {elem.user.name}
              </NavLink>
              <p className="text-center text-md text-[#8E8E8E] mt-1">
                Accuracy Index:{" "}
                <span className="text-c-green font-bold">
                  +3.10% (2 Months)
                </span>
              </p>
              <div className="flex flex-row justify-around mt-2">
                <p className="text-[#8E8E8E]">
                  <span className="font-bold">{elem.user.followers_count}</span>{" "}
                  followers
                </p>
                <p className="text-[#8E8E8E]">
                  <span className="font-bold">{elem.user.following_count}</span>{" "}
                  following
                </p>
              </div>
              <p className="mt-2 text-md">
                {!elem.user.about ? (
                  <span className="text-sm text-gray-400">
                    not added about yet...
                  </span>
                ) : (
                  elem.user.about
                )}
              </p>
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
    </>
  );
};

export default Users;
