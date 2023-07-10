import { BiCommentDetail, BiShareAlt } from "react-icons/bi";
import TopPerformers from "./Partials/TopPerformers/TopPerformers";
import { AiOutlineLike } from "react-icons/ai";
import CreatePost from "./Partials/CreatePost/CreatePost";

const Main = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            {/* left side start */}
            <div className=" border-2 p-4 rounded-lg shadow-sm">
              <CreatePost />
            </div>

            <div className="my-5 w-full h-[1px] bg-[#D3DAE2] shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px]"></div>

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
                brokers you choose, easy comparison!Start Trading with one of
                the leading brokers you choose, easy comparison!
              </p>
              <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4] transition-shadow duration-300 ease-in-out">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="text-red-600 font-semibold text-lg">
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
              <div className="my-4 flex gap-2">
                <input
                  type="text"
                  className="w-full rounded-3xl border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-c-green-dark sm:text-sm sm:leading-6"
                  placeholder="add a comment..."
                />
                <button className="bg-c-green rounded-3xl text-sm text-white p-2 px-4 hover:bg-c-green-dark transition-all">
                  Comment
                </button>
              </div>
              <div className="p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(0,_0,_0,_0.2)_0px_0px_3px] bg-white transition-shadow duration-300 ease-in-out">
                <div className="flex flex-row items-start gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="Profile Icon"
                    className="w-10 rounded-full"
                  />
                  <div>
                    <div className="w-full flex flex-row justify-between items-center">
                      <h3 className="text-sm font-semibold">John Dev</h3>
                      <p className="text-sm text-[#8E8E8E] mt-0.5">4 hrs ago</p>
                    </div>
                    <p className="mt-1 text-sm">
                      Start Trading with one of the leading brokers you choose,
                      easy comparison! Start Trading with one of the leading
                      brokers you choose, easy comparison! Start Trading with
                      one of the leading brokers you choose, easy
                      comparison!Start Trading with one of the leading brokers
                      you choose, easy comparison!
                    </p>
                  </div>
                </div>
                <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
                <div className="flex flex-row items-start gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                    alt="Profile Icon"
                    className="w-10 rounded-full"
                  />
                  <div>
                    <div className="w-full flex flex-row justify-between items-center">
                      <h3 className="text-sm font-semibold">John Dev</h3>
                      <p className="text-sm text-[#8E8E8E] mt-0.5">4 hrs ago</p>
                    </div>
                    <p className="mt-1 text-sm">
                      Start Trading with one of the leading brokers you choose,
                      easy comparison! Start Trading with one of the leading
                      brokers you choose, easy comparison! Start Trading with
                      one of the leading brokers you choose, easy
                      comparison!Start Trading with one of the leading brokers
                      you choose, easy comparison!
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                brokers you choose, easy comparison!Start Trading with one of
                the leading brokers you choose, easy comparison!
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
            {/* create post end */}
          </div>
          {/* left side end */}

          {/* right side start */}
          <div className="col-span-12 lg:col-span-4">
            {/* Top Trending Stocks start */}
            <div className=" border-2 p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-gray-400 mb-3 text-xl ">
                Top Trending Stocks
              </h2>
            </div>
            {/* Top Trending Stocks end */}

            {/* Top Performers start*/}
            <div className="mt-4 border-2 p-4 rounded-lg shadow-sm">
              <h2 className="font-semibold text-gray-400 mb-3 text-xl">
                Top Performers
              </h2>
              <TopPerformers />
            </div>
            {/* Top Performers end*/}
          </div>
          {/* right side end */}
        </div>
      </div>
    </>
  );
};

export default Main;
