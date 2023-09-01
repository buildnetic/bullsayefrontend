/* eslint-disable react/prop-types */
import { FaInstagram, FaLock, FaTiktok, FaYoutube } from "react-icons/fa";
import ProfileImg from "../../../../assets/images/profile-icon.png";

const ProfileLocked = ({ userDetails, isUserFollow, userFollowHandler }) => {
  return (
    <>
      <div className="mt-5 py-16 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center border-2 w-20 h-20 p-4 rounded-full">
            <FaLock className="text-3xl text-gray-400" />
          </div>
          <p className="mt-4 text-md">This profile is locked</p>
        </div>

        <h3 className="text-center text-xl font-bold mt-5">
          To unlock the user you need to follow
        </h3>
        <div className="mt-10 flex flex-row justify-around ">
          <div>
            <img
              src={!userDetails?.image ? ProfileImg : userDetails?.image}
              alt="Profile Image"
              className={`w-16 h-16 rounded-full text-xs border-2 border-gray-100 ${
                !userDetails?.image && "p-1.5"
              }`}
            />
            <p className="mt-3 text-center font-semibold capitalize">
              {userDetails?.name}
            </p>
            <button
              className="mt-2 text-center bg-gray-100 hover:bg-gray-300 transition-all rounded-lg px-4 py-1.5 text-sm font-semibold"
              onClick={userFollowHandler}
            >
              {isUserFollow ? "Unfollow" : "Follow"}
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-black">
              <FaTiktok className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Tiktok</p>
            <button className="mt-2 text-center bg-gray-100 hover:bg-gray-300 transition-all rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-[#FF0000] border-[#FF0000]">
              <FaYoutube className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Youtube</p>
            <button className="mt-2 text-center bg-gray-100 hover:bg-gray-300 transition-all rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-[#ee2a7b]">
              <FaInstagram className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Instagram</p>
            <button className="mt-2 text-center bg-gray-100 hover:bg-gray-300 transition-all rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLocked;
