import { RiStockLine } from "react-icons/ri";
import { BiTimer } from "react-icons/bi";

const Main = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 py-16 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            {/* left side start */}
            <div className=" border-2 p-4 rounded-lg shadow-sm">
              {/* create post start */}
              <div className="flex flex-row gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile Image"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full"
                />
                <div className="w-full">
                  <textarea
                    id="message"
                    rows="4"
                    className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-c-green focus:border-c-green dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-c-green dark:focus:border-c-green"
                    placeholder="Your message..."
                  ></textarea>
                  <div className="flex flex-row justify-between mt-4">
                    <div className="">
                      <button
                        type="button"
                        className="rounded-md border-c-green border-2 bg-c-green p-2 px-3 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
                      >
                        <RiStockLine className="text-xl inline-block mr-1" />
                        Stock
                      </button>
                      <button
                        type="button"
                        className="rounded-md border-c-green border-2 bg-c-green p-2 px-3 shadow-md hover:shadow-none ml-4 text-white duration-75 text-sm font-medium"
                      >
                        <BiTimer className="text-xl inline-block mr-1" />
                        Validity
                      </button>
                    </div>
                    <button
                      type="button"
                      className="rounded-md border-c-green border-2 bg-c-green p-2 px-3 shadow-md hover:shadow-none text-white duration-75 text-sm font-medium"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* create post end */}
          </div>
          {/* left side end */}

          {/* right side start */}
          <div className="col-span-12 lg:col-span-4 border-2 p-4 rounded-lg shadow-sm">
            {/* Top Trending Stocks start */}
            <h2 className="font-semibold text-gray-400 mb-3 text-xl">
              Top Trending Stocks
            </h2>
            {/* Top Trending Stocks end */}

            {/* Top Performers start*/}
            <h2 className="font-semibold text-gray-400 mb-3 text-xl mt-4">
              Top Performers
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Profile Icon"
                  className="w-14 rounded-full mx-auto"
                />
                <h3 className="text-md font-bold text-center">John Dev</h3>
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
              <div className="p-3 overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                  alt="Profile Icon"
                  className="w-14 rounded-full mx-auto"
                />
                <h3 className="text-md font-bold text-center">John Dev</h3>
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
