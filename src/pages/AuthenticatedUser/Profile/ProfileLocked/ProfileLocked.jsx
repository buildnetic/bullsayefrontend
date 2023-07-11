import { FaLock } from "react-icons/fa";

const ProfileLocked = () => {
  return (
    <>
      <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center border-2 w-20 h-20 p-4 rounded-full">
            <FaLock className="text-3xl text-gray-400" />
          </div>
          <p className="mt-4 text-md">This profile is locked</p>
        </div>

        <div className="text-center text-xl font-bold mt-5">
          To unlock the user you need to follow social media
        </div>
      </div>
    </>
  );
};

export default ProfileLocked;
