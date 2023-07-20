import { AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail, BiShareAlt } from "react-icons/bi";

const PostCard = ({ data, handleCommentClick }) => {
  return (
    <>
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
        comparison! Start Trading with one of the leading brokers you choose,
        easy comparison! Start Trading with one of the leading brokers you
        choose, easy comparison!Start Trading with one of the leading brokers
        you choose, easy comparison!
      </p>
      <div className="mt-5 p-6 px-8 overflow-hidden rounded-lg shadow-[rgba(255,_0,_0,_0.24)_0px_2px_5px] bg-[#ffd4d4] transition-shadow duration-300 ease-in-out">
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-red-600 font-semibold text-lg">Selling Call</h3>
          <h3 className=" text-green-600 text-lg font-semibold">+12.24%</h3>
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <h3 className="text-2xl font-bold">Tesla</h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Current Price: </span> $162
          </h3>
          <h3 className="flex items-center gap-2 text-gray-600 text-2xl font-semibold">
            <span className="text-lg font-medium">Validity: </span> $150
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
      </div>
    </>
  );
};

export default PostCard;
