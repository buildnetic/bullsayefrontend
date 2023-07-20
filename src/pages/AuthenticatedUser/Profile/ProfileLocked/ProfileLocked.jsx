import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaInstagram, FaLock, FaTiktok, FaYoutube } from "react-icons/fa";

const ProfileLocked = () => {
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
          To unlock the user you need to follow below social medias
        </h3>
        <div className="mt-10 flex flex-row justify-around ">
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 mx-auto rounded-full">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <p className="mt-3 text-center font-semibold">John Dev</p>
            <button className="mt-2 text-center bg-gray-100 rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-black">
              <FaTiktok className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Tiktok</p>
            <button className="mt-2 text-center bg-green-100 rounded-lg px-4 py-1.5 text-sm font-semibold flex items-center gap-2">
              Following
              <AiOutlineLoading3Quarters className="animate-spin" />
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-[#FF0000] border-[#FF0000]">
              <FaYoutube className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Youtube</p>
            <button className="mt-2 text-center bg-gray-100 rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
          <div>
            <div className="flex justify-center items-center border-2 w-16 h-16 p-4 mx-auto rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] border-[#ee2a7b]">
              <FaInstagram className="text-3xl text-white" />
            </div>
            <p className="mt-3 text-center font-semibold">Instagram</p>
            <button className="mt-2 text-center bg-gray-100 rounded-lg px-4 py-1.5 text-sm font-semibold">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileLocked;
