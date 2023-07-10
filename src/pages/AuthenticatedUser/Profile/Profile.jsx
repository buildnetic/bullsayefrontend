import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Comments from "../../../components/AuthenticatedUser/Comments/Comments";
import PostCard from "../../../components/AuthenticatedUser/PostCard/PostCard";
import { useState } from "react";

const Profile = () => {
  const currentPathname = window.location.pathname;

  const [selectedShowCommentIds, setShowCommentSelectedIds] = useState([]);

  const handleCommentClick = (id) => {
    if (selectedShowCommentIds.includes(id)) {
      setShowCommentSelectedIds(
        selectedShowCommentIds.filter((selectedId) => selectedId !== id)
      );
    } else {
      setShowCommentSelectedIds([...selectedShowCommentIds, id]);
    }
  };

  const data = [
    {
      id: 1,
      name: "Post 1",
    },
    {
      id: 2,
      name: "Post 2",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
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
              to="/setting/edit"
              className="ml-auto text-center mt-4 block rounded-lg border-c-green border-2 p-2 px-4 shadow-md hover:shadow-none text-black hover:text-white hover:bg-c-green transition-all duration-75 text-sm font-medium"
            >
              {currentPathname.startsWith("/user") ? "Follow" : "Edit Profile"}
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

        {/* My Posts */}
        <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_0px_6px] bg-white transition-shadow duration-300 ease-in-out">
          <h2 className="font-semibold text-gray-400 mb-4 text-2xl">
            My Posts
          </h2>
          {data.map((elem) => (
            <div
              key={elem.id}
              className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out"
            >
              <PostCard data={elem} handleCommentClick={handleCommentClick} />

              {selectedShowCommentIds.includes(elem.id) && <Comments />}
            </div>
          ))}

          <div className="my-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out">
            <div className="flex flex-row items-center gap-5">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                alt="Profile Icon"
                className="w-14 rounded-full"
              />
              <div>
                <h3 className="text-lg font-bold">John Dev</h3>
                <p className="text-sm text-[#8E8E8E] mt-1">1 day ago</p>
              </div>
            </div>
            <p className="mt-2 text-md">
              Start Trading with one of the leading brokers you choose, easy
              comparison! Start Trading with one of the leading brokers you
              choose, easy comparison! Start Trading with one of the leading
              brokers you choose, easy comparison!Start Trading with one of the
              leading brokers you choose, easy comparison!
            </p>
            <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_255,_0,_0.24)_0px_2px_5px] bg-green-200 transition-shadow duration-300 ease-in-out">
              <div className="flex flex-row justify-between items-center">
                <h3 className="text-green-600 font-semibold text-lg">
                  Selling Call
                </h3>
                <h3 className=" text-green-600 text-lg font-semibold">
                  +12.24%
                </h3>
              </div>
              <div className="mt-3 flex flex-row justify-between items-center">
                <h3 className="text-2xl font-bold">Tesla</h3>
                <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
                  <span className="text-lg font-medium">Current Price: </span>{" "}
                  $162
                </h3>
                <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
                  <span className="text-lg font-medium">Validity: </span> $150
                </h3>
              </div>
            </div>
            <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
            <div className="mt-3 flex flex-row justify-between items-center">
              <p className="text-md flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
                <AiOutlineLike className="text-lg" />
                98 Likes
              </p>
              <p className="text-md flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
                <BiCommentDetail className="text-lg" />
                24 Comments
              </p>
              <p className="text-md flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
                <BiShareAlt className="text-lg" />
                Share
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
