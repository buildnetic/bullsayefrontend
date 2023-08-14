/* eslint-disable react/prop-types */
import moment from "moment";
import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail, BiShareAlt } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";

const PostCard = ({ data, handleCommentClick }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-5">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt="Profile Icon"
          className="w-14 rounded-full"
        />
        <div className=" w-full">
          <h3 className="text-lg font-bold">John Dev</h3>
          <div className="flex justify-between items-center gap-3">
            <p className="text-sm text-[#8E8E8E] mt-1">
              Created at:
              {" " + moment(data.created_at).format("MMMM Do YYYY, h:mm:ss a")}
            </p>

            {moment(data.updated_at).isAfter(moment(data.updated_at)) && (
              <p className="text-sm text-[#8E8E8E] mt-1">
                Updated at:
                {" " +
                  moment(data.updated_at).format("MMMM Do YYYY, h:mm:ss a")}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2">
        {JSON.parse(data.hashtags).map((elem, id) => (
          <span
            key={id}
            className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 me-1.5"
          >
            {"#" + elem}
          </span>
        ))}
      </div>

      <p className="mt-2 text-md">{data.description}</p>
      <div
        className={`mt-5 p-6 px-8 overflow-hidden rounded-lg transition-shadow duration-300 ease-in-out ${
          data.type === "sell"
            ? "shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4]"
            : "shadow-[rgba(0,_255,_0,_0.24)_0px_2px_5px] bg-green-200"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <h3
            className={`font-semibold text-lg ${
              data.type === "sell" ? "text-red-600" : "text-green-600"
            }`}
          >
            {data.type === "sell" ? "Selling" : "Buying"} Call
          </h3>
          <h3 className=" text-green-600 text-lg font-semibold">+12.24%</h3>
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <h3 className="text-2xl font-bold capitalize">{data.stock_name}</h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Current Price: </span>{" "}
            {data.current_price}
          </h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Target Price: </span>{" "}
            {data.target_price}
          </h3>
        </div>
      </div>
      <div className="my-5 w-full h-[1px] bg-[#D3DAE2]"></div>
      <div className="mt-3 flex flex-row justify-between items-center">
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <AiOutlineLike className="text-lg" />
          98 Likes
        </p>
        <p
          onClick={() => {
            handleCommentClick(data.id);
          }}
          className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all"
        >
          <BiCommentDetail className="text-lg" />
          24 Comments
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <BiShareAlt className="text-lg" />
          Share
        </p>
        <p className="text-sm flex items-center gap-1 text-gray-500 cursor-pointer hover:text-gray-900 font-semibold transition-all">
          <BsRepeat className="text-lg" />
          Reshare
        </p>
      </div>
    </>
  );
};

export default PostCard;
