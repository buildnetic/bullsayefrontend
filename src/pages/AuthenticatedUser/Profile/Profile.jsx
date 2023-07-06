import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="p-6 px-8 overflow-hidden rounded-lg shadow-md bg-white transition-shadow duration-300 ease-in-out">
          <div className="flex flex-row items-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt="Profile Icon"
              className="w-20 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">John Dev</h3>
              <p className="text-center text-md text-[#8E8E8E] mt-1">
                Accuracy Index:{" "}
                <span className="text-c-green font-bold">
                  +3.10% (2 Months)
                </span>
              </p>
            </div>
            <NavLink
              to="/profile/edit"
              className="ml-auto text-center mt-4 block rounded-lg border-c-green border-2 bg-c-green p-2 px-4 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
            >
              Edit Profile
            </NavLink>
          </div>
          <p className="mt-2 text-md">
            Start Trading with one of the leading brokers you choose, easy
            comparison! Start Trading with one of the leading brokers you
            choose, easy comparison! Start Trading with one of the leading
            brokers you choose, easy comparison!Start Trading with one of the
            leading brokers you choose, easy comparison!
          </p>
          <div className="flex flex-row justify-around mt-2">
            <p className="text-[#8E8E8E]">
              <span className="font-bold">4M</span> followers
            </p>
            <p className="text-[#8E8E8E]">
              <span className="font-bold">456</span> following
            </p>
          </div>

          <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>

          <div className="flex flex-row justify-around mt-2">
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Buying Accuracy</p>
              <p className="text-c-green font-bold mt-0.5">20/50</p>
            </div>
            <div className="text-center">
              <p className="text-[#8E8E8E] text-sm">Selling Accuracy</p>
              <p className="text-[#EF413E] font-bold mt-0.5">30/50</p>
            </div>
          </div>
        </div>

        <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-md bg-white transition-shadow duration-300 ease-in-out">
          <h2 className="font-semibold text-gray-400 mb-3 text-xl">My Posts</h2>
        </div>
      </div>
    </>
  );
};

export default Profile;
